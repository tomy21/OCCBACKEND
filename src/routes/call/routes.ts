import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { Server } from "socket.io";

export default function createGateStatusRoute(
  io: Server,
  users: { id: string | null; busy: boolean }[],
  getNextUserIndex: () => number,
  setNextUserIndex: (val: number) => void
) {
  const router = Router();
  const prisma = new PrismaClient();

  let queue: { id: number; res: any }[] = [];
  let processing = false;

  router.get("/status/:id", async (req, res) => {
    const id = parseInt(req.params.id);

    const gate = await prisma.occGate.findUnique({
      where: { id },
      include: {
        location: { select: { Name: true, Code: true } },
      },
    });

    const locationName = gate?.location?.Name;

    const findIntercom = await prisma.occIntercome.findFirst({
      where: {
        GateName: gate?.gate,
        Locations: locationName,
        CreatedAt: {
          gte: new Date(new Date().setHours(0, 0, 0, 0)),
        },
      },
    });

    if (!findIntercom) {
      await prisma.occIntercome.create({
        data: {
          GateName: gate?.gate || "-",
          Locations: locationName || "-",
          Count: 1,
        },
      });
    } else {
      await prisma.occIntercome.update({
        where: { Id: findIntercom.Id },
        data: {
          Count: findIntercom.Count + 1,
        },
      });
    }

    // Masukkan ke queue dan proses
    queue.push({ id, res });
    processQueue();

    return; // jangan langsung kirim response
  });

  router.post("/call-ended", (req: any, res: any) => {
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
      const { id, res } = queue[0];

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
            });

            res.status(200).json({
              message: "Gate status fetched and sent to user",
              data: gate,
            });

            queue.shift();

            setNextUserIndex((idx + 1) % users.length);

            allocated = true;
            break;
          } catch (error) {
            res.status(500).json({ error: "Failed to fetch gate status" });
            queue.shift();
            allocated = true;
            break;
          }
        }
      }

      if (!allocated) {
        console.log("All users busy, waiting to retry queue...");
        await new Promise((r) => setTimeout(r, 500));
      }
    }

    processing = false;
  };

  return router;
}
