import { dbMain } from "../prisma/client";

let retryDelay = 5000; // 5 detik awal

export const checkArduinoTimeout = async () => {
  const timeoutDuration = 30000;
  const now = new Date();

  try {
    await dbMain.occGate.updateMany({
      where: { updatedAt: { lt: new Date(now.getTime() - timeoutDuration) } },
      data: { arduino: 0 },
    });

    retryDelay = 5000; // reset kalau berhasil
  } catch (err: any) {
    console.error("[ERROR] checkArduinoTimeout:", err.message);

    setTimeout(async () => {
      try {
        await dbMain.$connect();
        console.log("Reconnected Prisma after error");
        retryDelay = 5000; // reset kalau berhasil
      } catch (reErr) {
        console.error("Reconnect failed, retrying later…");
        retryDelay = Math.min(retryDelay * 2, 60000); // max 1 menit
      }
    }, retryDelay);
  }
};

// panggil tiap 15 detik
setInterval(checkArduinoTimeout, 15000);
