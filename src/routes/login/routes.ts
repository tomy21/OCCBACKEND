// routes/auth.ts
import { Router, Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";
import { createResponse } from "../../helper/responseCode";
dotenv.config();

const URL_LOGIN = process.env.URL_LOGIN!;

const router = Router();

router.post("/login", async (req: Request, res: Response): Promise<void> => {
  try {
    const { identifier, password, remember } = req.body;

    const backendLoginUrl = `${URL_LOGIN}/v1/api/auth/login`;

    // Kirim request ke backend lama dan minta supaya header (Set-Cookie) disertakan
    const response = await axios.post(
      backendLoginUrl,
      { identifier, password, remember },
      {
        withCredentials: true, // penting agar cookie diterima
        headers: {
          "Content-Type": "application/json",
          credentials: "include",
        },
      }
    );

    // Ambil cookie dari respons backend lama
    const setCookie = response.headers["set-cookie"];
    if (setCookie) {
      // Kirim kembali ke client (browser)
      res.setHeader("Set-Cookie", setCookie);
    }

    // Teruskan data respons ke client
    res.status(200).json(response.data);
  } catch (error: any) {
    if (error.response) {
      res
        .status(error.response.status)
        .json(error.response.data || { error: "Login failed" });
    }
    console.error("Login proxy error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
