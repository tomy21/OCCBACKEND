import { Request, Response } from "express";
import { hashPassword, comparePassword } from "../utils/bcrypt";
import { generateToken } from "../utils/JWT";
import { dbMain, PrismaMain } from "../prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AuthRequest } from "../middleware/AuthMiddleware";
import {
  createPaginatedResponse,
  createResponse,
} from "../helper/responseCode";
import { formatToJakarta } from "../helper/timeHelper";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;
    const skip = (page - 1) * limit;
    const search = (req.query.search as string) || "";

    const whereClause: PrismaMain.UsersWhereInput = search
      ? {
          OR: [
            {
              name: { contains: search, mode: "insensitive" },
              username: { contains: search, mode: "insensitive" },
              email: { contains: search, mode: "insensitive" },
            },
          ],
        }
      : {};

    const totalItems = await dbMain.users.count({
      where: whereClause,
    });

    const users = await dbMain.users.findMany({
      skip,
      take: limit,
      select: {
        id: true,
        name: true,
        email: true,
        username: true,
        role: true,
        inCall: true,
        lastActive: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: { updatedAt: "desc" },
    });

    const formattedUsers = users.map((u) => ({
      ...u,
      lastActive: u.lastActive?.toISOString() ?? null,
      createdAt: u.createdAt?.toISOString(),
      updatedAt: u.updatedAt?.toISOString(),
    }));

    res
      .status(200)
      .json(
        createPaginatedResponse(
          "USER",
          "READ",
          "Get all users fetched",
          formattedUsers,
          page,
          limit,
          totalItems
        )
      );
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(createResponse("USER", "ERROR", "Internal server error"));
  }
};

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, username, email, password, role } = req.body;

    const existing = await dbMain.users.findUnique({ where: { email } });
    if (existing) {
      res.status(400).json({ message: "Email already registered" });
      return;
    }

    const hashed = await hashPassword(password);

    const user = await dbMain.users.create({
      data: { name, username, email, password: hashed, role, status: 1 },
    });

    res
      .status(201)
      .json(createResponse("USER", "CREATE", "User registered", user));
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { identifier, password, remember } = req.body;
    const user = await dbMain.users.findFirst({
      where: {
        deletedAt: null,
        OR: [
          { email: identifier },
          { username: identifier }, // kalau `name` kamu pakai sebagai username
        ],
      },
      select: {
        id: true,
        name: true,
        email: true,
        username: true,
        role: true,
        password: true,
      },
    });

    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }

    const match = await bcrypt.compare(password, user.password || "");
    if (!match) {
      res.status(401).json({ success: false, message: "Invalid credentials" });
      return;
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET as string,
      { expiresIn: remember ? "30d" : "1d" }
    );

    await dbMain.users.update({
      where: { id: user.id },
      data: { lastActive: new Date() },
    });

    const responseLogin = {
      id: user.id,
      username: user.username,
      role: user.role,
      token,
    };

    // simpan ke cookie httpOnly
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: remember
        ? 30 * 24 * 60 * 60 * 1000 // 30 hari
        : 24 * 60 * 60 * 1000, // 1 hari
    });

    res.json(createResponse("USER", "READ", "User logged in", responseLogin));
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const logout = (req: Request, res: Response) => {
  res.clearCookie("token");
  res.json({ success: true, message: "Logged out" });
};

export const edit = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, email, role, status } = req.body;

    const user = await dbMain.users.update({
      where: { id: parseInt(id) },
      data: { name, email, role, status, updatedAt: new Date() },
    });

    res.json({ message: "User updated", user });
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error });
  }
};

export const changePassword = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = (req as any).user;
    const { oldPassword, newPassword } = req.body;

    const user = await dbMain.users.findUnique({ where: { id } });
    if (!user || !user.password) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const isMatch = await comparePassword(oldPassword, user.password);
    if (!isMatch) {
      res.status(400).json({ message: "Old password incorrect" });
      return;
    }

    const hashed = await hashPassword(newPassword);

    await dbMain.users.update({
      where: { id },
      data: { password: hashed, updatedAt: new Date() },
    });

    res.json({ message: "Password changed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error changing password", error });
  }
};

export const softDelete = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    await dbMain.users.update({
      where: { id: parseInt(id) },
      data: { deletedAt: new Date(), status: 0 },
    });

    res.json({ message: "User soft deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};

export const getProfile = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    const user = await dbMain.users.findUnique({
      where: { id: userId },
    });

    res.json({ success: true, data: user });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
