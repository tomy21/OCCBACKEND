import { Request, Response } from "express";
import { endCall, handleIncomingCall } from "../service/service.call";

export const call = async (req: Request, res: Response) => {
  const { caller } = req.body;
  if (!caller) {
    res.status(400).json({ error: "caller is required" });
    return;
  }

  const result = await handleIncomingCall(caller);
  res.json(result);
};

export const end = async (req: Request, res: Response) => {
  const { csId } = req.body;
  if (!csId) {
    res.status(400).json({ error: "csId is required" });
    return;
  }

  const result = await endCall(csId);
  res.json(result);
};
