import { Request, Response, NextFunction } from "express";
import { dbMain } from "../prisma/client";

export const logActivity = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const oldJson = res.json;

  res.json = function (data: any) {
    (async () => {
      try {
        // copy body tanpa password agar aman
        const body = { ...req.body };
        if (body.password) delete body.password;

        // ambil user kalau ada (misalnya dari JWT atau body)
        let user: string | null = null;
        if ((req as any).user) {
          user =
            (req as any).user.email ||
            (req as any).user.username ||
            JSON.stringify((req as any).user);
        } else if (req.body?.email) {
          user = req.body.email;
        }

        await dbMain.occLogActivity.create({
          data: {
            NameActivity: `${req.method} ${req.originalUrl}`,
            User: user || "Anonymous",
            Action: JSON.stringify({
              params: req.params,
              query: req.query,
              body,
            }),
            Response: JSON.stringify(data),
          },
        });
      } catch (err) {
        console.error("❌ Failed to log activity:", (err as Error).message);
      }
    })();

    return oldJson.call(this, data);
  };

  next();
};
