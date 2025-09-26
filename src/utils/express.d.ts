import { JwtPayload } from "../middleware/AuthMiddleware"; // sesuaikan path

declare module "express-serve-static-core" {
  interface Request {
    user?: JwtPayload;
  }
}
