import { dbMain } from "../prisma/client";

export const fetchIntercomeSummary = async (
  startDate?: string,
  endDate?: string
) => {
  let whereCondition = {};

  if (startDate && endDate) {
    whereCondition = {
      CreatedAt: {
        gte: new Date(startDate),
        lte: new Date(endDate),
      },
    };
  } else {
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);

    whereCondition = {
      CreatedAt: {
        gte: todayStart,
        lte: todayEnd,
      },
    };
  }

  const summary = await dbMain.occIntercome.groupBy({
    by: ["GateName", "Locations"],
    where: whereCondition,
    _sum: {
      Count: true,
    },
  });

  return summary;
};
