import { Request, Response } from "express";
import { dbMain } from "../prisma/client";

const actionsToLog: Record<string, string> = {
  "/login": "Login",
  "/open-gate": "Open Gate",
  "/issue": "Input Issue",
  "/master/update": "Update Master",
  "/master/insert": "Insert Master",
};

export const logActivity = (req: Request, res: Response, next: Function) => {
  const oldJson = res.json;

  res.json = function (data: any) {
    (async () => {
      try {
        // cari aksi yg cocok
        const found = Object.entries(actionsToLog).find(([path]) =>
          req.originalUrl.includes(path)
        );

        if (found) {
          const [, friendlyName] = found; // sekarang pasti string

          const body = { ...req.body };
          if ("password" in body) delete body.password;

          let user: string | null = null;
          if ((req as any).user) {
            const userId = (req as any).user.id;
            const userData = await dbMain.users.findUnique({
              where: { id: userId },
              select: { email: true, username: true },
            });

            user = userData?.email || userData?.username || String(userId);
          } else if (req.body?.email) {
            user = req.body.email;
          }

          console.log("[log]", user);

          await dbMain.occLogActivity.create({
            data: {
              NameActivity: friendlyName, // sudah pasti string
              User: user || "Anonymous",
              Action: JSON.stringify({
                method: req.method,
                body: JSON.stringify(body),
              }),
              Response: JSON.stringify({
                status: res.statusCode,
                message:
                  typeof data === "object" && data && "message" in data
                    ? (data as any).message
                    : data,
              }),
            },
          });
        }
      } catch (err) {
        console.error("❌ Failed to log activity:", (err as Error).message);
      }
    })();

    return oldJson.call(this, data);
  };

  next();
};
