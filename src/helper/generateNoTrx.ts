import { dbMain } from "../prisma/client";

// Helper untuk nol di depan angka
function padNumber(num: number, length: number): string {
  return num.toString().padStart(length, "0");
}

// Fungsi generate kode transaksi
export async function generateTicketCode(lokasiCode: string): Promise<string> {
  // Hitung semua ticket yang sudah ada untuk lokasi tertentu

  const Lokasi = await dbMain.occRefLocation.findUnique({
    where: {
      Code: lokasiCode,
    },
  });

  const countAll = await dbMain.occIssue.count({
    where: {
      lokasi: Lokasi?.Name,
    },
  });

  // Tambahkan 1 untuk sequence berikutnya
  const sequence = padNumber(countAll + 1, 5); // contoh: 00001, 00002, ...

  // Gabungkan code lokasi + sequence
  const ticketCode = `${lokasiCode}${sequence}`;

  return ticketCode;
}
