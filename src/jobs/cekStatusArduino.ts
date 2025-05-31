// cron atau interval di server
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const checkArduinoTimeout = async () => {
  const timeoutDuration = 30000; // 30 detik
  const now = new Date();

  await prisma.occGate.updateMany({
    where: {
      updatedAt: {
        lt: new Date(now.getTime() - timeoutDuration),
      },
    },
    data: {
      arduino: 0,
    },
  });

  console.log("Checked for disconnected Arduinos");
};

// panggil ini setiap 15 detik
setInterval(checkArduinoTimeout, 15000);
