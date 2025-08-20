import { dbMain } from "../prisma/client";

export const checkArduinoTimeout = async () => {
  const timeoutDuration = 30000; // 30 detik
  const now = new Date();

  try {
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
  } catch (err: any) {
    console.error("[ERROR] checkArduinoTimeout:", err.message);

    // Optional: reconnect Prisma jika koneksi drop
    try {
      await dbMain.$disconnect();
      await dbMain.$connect();
      console.log("Reconnected Prisma after error");
    } catch (reErr: any) {
      console.error("Failed to reconnect Prisma:", reErr.message);
    }
  }
};

// panggil tiap 15 detik
setInterval(checkArduinoTimeout, 15000);
