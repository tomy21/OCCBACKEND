import { Router } from "express";
import { Server } from "socket.io";
import { toZonedTime } from "date-fns-tz";
import { recognizePlate } from "../../middleware/PlateRecognize";
import { generateTicketCode } from "../../helper/generateNoTrx";
import upload from "../../middleware/uploadImage";
import { dbMain } from "../../prisma/client";
import axios from "axios";
import { get } from "http";

export default function createGateStatusRoute(
  io: Server,
  users: { id: number | null; socketId: string | null; busy: boolean }[],
  getNextUserIndex: () => number,
  setNextUserIndex: (val: number) => void
) {
  const router = Router();

  const timeZone = "Asia/Jakarta";
  let queue: {
    id: number;
    res: any;
    imageFile: string;
    timeoutId: NodeJS.Timeout;
    detailGate: any;
  }[] = [];

  let processing = false;

  router.post(
    "/status/:id",
    upload.single("image"),
    async (req: any, res: any) => {
      const id = parseInt(req.params.id);
      const imageFile = req.file;

      const imagePath = imageFile?.filename || null;

      let plateNumber = "-";
      if (imageFile?.path) {
        try {
          const recognizeResult = await recognizePlate(imageFile.path);
          const hasPlate =
            Array.isArray(recognizeResult?.results) &&
            recognizeResult.results.length > 0;
          plateNumber = hasPlate ? recognizeResult.results[0].plate : "-";
        } catch (err: any) {
          console.warn("⚠️ Plate recognition failed:", err.message);
        }
      }

      const gate = await dbMain.occGate.findUnique({
        where: { id },
        include: {
          location: { select: { Name: true, Code: true } },
        },
      });

      const locationName = gate?.location?.Name;
      const todayStart = new Date();
      todayStart.setHours(0, 0, 0, 0);

      const noTicket = await generateTicketCode(gate?.location?.Code || "");

      const addIssue = await dbMain.occIssue.create({
        data: {
          ticket: noTicket,
          gate: gate?.gate,
          lokasi: locationName,
          foto_in: imagePath,
          number_plate: plateNumber || "",
          createdBy: gate?.gate || "-",
        },
        select: {
          id: true,
          ticket: true,
          gate: true,
          lokasi: true,
          foto_in: true,
          number_plate: true,
        },
      });

      const findIntercom = await dbMain.occIntercome.findFirst({
        where: {
          GateName: gate?.gate,
          Locations: locationName,
          CreatedAt: {
            gte: todayStart,
          },
        },
      });

      const now = new Date();
      const plus7hours = new Date(now.getTime() + 7 * 60 * 60 * 1000);

      if (!findIntercom) {
        await dbMain.occIntercome.create({
          data: {
            GateName: gate?.gate || "-",
            Locations: locationName || "-",
            Count: 1,
            CreatedAt: plus7hours,
          },
        });
      } else {
        await dbMain.occIntercome.update({
          where: { Id: findIntercom.Id },
          data: {
            Count: findIntercom.Count + 1,
            CreatedAt: plus7hours,
          },
        });
      }

      const summary = await dbMain.occIntercome.groupBy({
        by: ["GateName", "Locations"],
        where: {
          CreatedAt: { gte: todayStart },
        },
        _sum: { Count: true },
      });

      io.emit("intercome-summary", summary);

      const timeoutId = setTimeout(() => {
        const index = queue.findIndex((q) => q.res === res);
        if (index !== -1) {
          queue.splice(index, 1);
          res
            .status(504)
            .json({ error: "Timeout: no available user within 5 seconds" });
        }
      }, 5000);

      queue.push({ id, res, imageFile, timeoutId, detailGate: addIssue });
      processQueue();
    }
  );

  router.post("/call-ended", (req: any, res: any) => {
    const { userId } = req.body;

    const user = users.find((u) => u.id === userId);

    if (!user || !user.socketId) {
      return res
        .status(404)
        .json({ error: "User not found or not registered" });
    }

    user.busy = false;

    console.log(`User ${userId} (${user.socketId}) marked as free`);

    res.json({ message: `User ${userId} status updated to free` });
  });

  const processQueue = async () => {
    if (processing || queue.length === 0) return;
    processing = true;

    while (queue.length > 0) {
      const { id, res, imageFile, detailGate } = queue[0];

      let allocated = false;
      const nextUserIndex = getNextUserIndex();

      for (let i = 0; i < users.length; i++) {
        const idx = (nextUserIndex + i) % users.length;

        if (users[idx].socketId && !users[idx].busy) {
          users[idx].busy = true;

          try {
            const gate = await dbMain.occGate.findUnique({
              where: { id },
              include: {
                location: { select: { Name: true, Code: true } },
              },
            });

            const getTransaction = await dbMain.occTransaction.findFirst({
              where: {
                GateName: gate?.gate,
                PlateNumberIn: detailGate.number_plate,
              },
            });

            const dataPOST = await axios.get(
              `https://5fcd2aeba14d.ngrok-free.app/api/get-data-post?plateNumber=${detailGate.number_plate}`
            );

            io.to(users[idx].socketId!).emit("gate-status-update", {
              gateId: id,
              gateStatus: gate?.statusGate,
              location: gate?.location,
              gate: gate?.gate,
              imageFileIn: getTransaction?.PathIn,
              imageFile: imageFile,
              detailGate: dataPOST.data || [],
            });

            const dataGate = {
              detailGate: dataPOST.data,
            };

            res.status(200).json({
              ResponseCode: 200,
              message: "Gate status fetched and sent to user",
              data: dataGate,
            });

            clearTimeout(queue[0].timeoutId);
            queue.shift();
            setNextUserIndex((idx + 1) % users.length);
            allocated = true;
            break;
          } catch (error) {
            console.error("Failed to process queue:", error);
            res.status(500).json({ error: "Failed to fetch gate status" });
            queue.shift();
            allocated = true;
            break;
          }
        }
      }

      if (!allocated) {
        console.log("All users busy, retrying after delay...");
        await new Promise((r) => setTimeout(r, 500));
      }
    }

    processing = false;
  };

  return router;
}
