import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { Server } from "socket.io";
import { toZonedTime } from "date-fns-tz";
import { recognizePlate } from "../../middleware/PlateRecognize";
import { generateTicketCode } from "../../helper/generateNoTrx";
import upload from "../../middleware/uploadImage";

export default function createGateStatusRoute(
  io: Server,
  users: { id: string | null; busy: boolean }[],
  getNextUserIndex: () => number,
  setNextUserIndex: (val: number) => void
) {
  const router = Router();
  const prisma = new PrismaClient();

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

      if (!imageFile || !imageFile.path) {
        return res.status(400).json({ error: "Image file not provided" });
      }

      const imagePath = imageFile.filename;

      const recognizeResult = await recognizePlate(imageFile.path);

      if (!recognizeResult || !recognizeResult.results) {
        return res
          .status(400)
          .json({ error: "Gagal convert gambar ke plate number" });
      }

      // console.log(recognizeResult.results[0].plate);

      const gate = await prisma.occGate.findUnique({
        where: { id },
        include: {
          location: { select: { Name: true, Code: true } },
        },
      });

      const locationName = gate?.location?.Name;

      const todayStart = new Date();
      todayStart.setHours(0, 0, 0, 0);

      const noTicket = await generateTicketCode(gate?.location?.Code || "");

      const addIssue = await prisma.occIssue.create({
        data: {
          ticket: noTicket,
          gate: gate?.gate,
          lokasi: locationName,
          foto_in: imagePath,
          number_plate: recognizeResult.results[0].plate,
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

      const findIntercom = await prisma.occIntercome.findFirst({
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
        await prisma.occIntercome.create({
          data: {
            GateName: gate?.gate || "-",
            Locations: locationName || "-",
            Count: 1,
            CreatedAt: plus7hours,
          },
        });
      } else {
        await prisma.occIntercome.update({
          where: { Id: findIntercom.Id },
          data: {
            Count: findIntercom.Count + 1,
            CreatedAt: plus7hours,
          },
        });
      }

      const summary = await prisma.occIntercome.groupBy({
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
          queue.splice(index, 1); // Hapus dari queue
          res
            .status(504)
            .json({ error: "Timeout: no available user within 5 seconds" });
        }
      }, 5000);

      // Masukkan ke queue dan proses
      queue.push({ id, res, imageFile, timeoutId, detailGate: addIssue });
      processQueue();

      // Jangan kirim response di sini, akan dikirim di processQueue
    }
  );

  router.post("/call-ended", (req: any, res: any) => {
    console.log("call-ended body:", req.body);

    const { socketId } = req.body;

    if (!socketId) {
      return res.status(400).json({ error: "socketId is required" });
    }

    const user = users.find((u) => u.id === socketId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.busy = false;
    console.log(`User with socketId ${socketId} marked as free`);

    res.json({ message: "User status updated to free" });
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

        if (users[idx].id && !users[idx].busy) {
          users[idx].busy = true;

          try {
            const gate = await prisma.occGate.findUnique({
              where: { id },
              include: {
                location: { select: { Name: true, Code: true } },
              },
            });

            io.to(users[idx].id!).emit("gate-status-update", {
              gateId: id,
              gateStatus: gate?.statusGate,
              location: gate?.location,
              gate: gate?.gate,
              imageFile: imageFile,
              detailGate: detailGate,
            });

            res.status(200).json({
              message: "Gate status fetched and sent to user",
              data: gate,
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
