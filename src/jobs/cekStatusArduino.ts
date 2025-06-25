// cron atau interval di server

import { dbMain } from "../prisma/client";

export const checkArduinoTimeout = async () => {
  const timeoutDuration = 30000; // 30 detik
  const now = new Date();

  await dbMain.occGate.updateMany({
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
