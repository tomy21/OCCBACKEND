// utils/timeHelper.ts
export function formatToJakarta(date: Date | string | null): string | null {
  if (!date) return null;

  const d = new Date(date);

  return new Intl.DateTimeFormat("id-ID", {
    timeZone: "Asia/Jakarta", // 🔹 langsung set ke WIB
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(d);
}
