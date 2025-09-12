import {
  PrismaClient as PrismaMain,
  Prisma as PrismaMainNS,
} from "../../prisma/generated/client-main";
import {
  PrismaClient as PrismaSecondary,
  Prisma as PrismaSecondaryNS,
} from "../../prisma/generated/client-secondary";

const globalForPrisma = global as unknown as {
  dbMain?: PrismaMain;
  dbSecondary?: PrismaSecondary;
};

export const dbMain =
  globalForPrisma.dbMain ??
  new PrismaMain({
    log: ["error", "warn"], // opsional, untuk debug koneksi
  });

export const dbSecondary =
  globalForPrisma.dbSecondary ??
  new PrismaSecondary({
    log: ["error", "warn"],
  });

// ✅ Export namespace Prisma biar bisa dipakai buat typing
export type { PrismaMainNS as PrismaMain };
export type { PrismaSecondaryNS as PrismaSecondary };

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.dbMain = dbMain;
  globalForPrisma.dbSecondary = dbSecondary;
}
