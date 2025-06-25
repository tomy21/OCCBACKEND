import { dbMain } from "../prisma/client";

// Helper untuk menambahkan nol di depan angka
function padNumber(num: number, length: number): string {
  return num.toString().padStart(length, "0");
}

// Fungsi untuk membuat ticket otomatis
export async function generateTicketCode(lokasiCode: string): Promise<string> {
  const now = new Date();
  const year = now.getFullYear();
  const month = padNumber(now.getMonth() + 1, 2);
  const day = padNumber(now.getDate(), 2);

  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const todayEnd = new Date();
  todayEnd.setHours(23, 59, 59, 999);

  // Hitung jumlah ticket hari ini untuk lokasi tertentu
  const countToday = await dbMain.occIssue.count({
    where: {
      createdAt: {
        gte: todayStart,
        lte: todayEnd,
      },
      lokasi: lokasiCode,
    },
  });

  const sequence = padNumber(countToday + 1, 4); // contoh: 0001

  const ticketCode = `${year}${month}${day}${lokasiCode}${sequence}`;
  return ticketCode;
}
