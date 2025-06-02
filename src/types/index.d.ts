import { TokeUserPayload } from "../middleware/verifyToken";

declare global {
  namespace Express {
    interface Request {
      TokeUserPayload?: TokeUserPayload;
    }
  }
}
