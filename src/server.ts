import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
dotenv.config();

import CategoryRoute from "./routes/category/router";
import DescriptionRoute from "./routes/description/router";
import IssueRoute from "./routes/Issues/route";
import LocationRoute from "./routes/location/routes";
import IOTRoute from "./routes/iot/routes";
import CallRoute from "./routes/call/routes";
import SummaryRoute from "./routes/summary/routes";
import TransactionRoute from "./routes/find-transaction/route";
import SendWhatsappRoute from "./routes/sendWhatsapp/route";

import CounterRoute from "./routes/counter/routes";
import eventNobu from "./routes/eventNobu/route";
import Auth from "./routes/login/routes";

import { checkArduinoTimeout } from "./jobs/cekStatusArduino";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import path from "path";

const app = express();
const port = process.env.PORT || 3005;
const server = http.createServer(app); // << gunakan ini
const io = new SocketIOServer(server, {
  cors: { origin: "*" }, // sesuaikan jika perlu
});

const users = [
  { id: null as number | null, socketId: null as string | null, busy: false },
  { id: null as number | null, socketId: null as string | null, busy: false },
  { id: null as number | null, socketId: null as string | null, busy: false },
  { id: null as number | null, socketId: null as string | null, busy: false },
  { id: null as number | null, socketId: null as string | null, busy: false },
];

let nextUserIndex = 0;

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
// app.post("/api/call", call);
// app.post("/api/end-call", end);

app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use("/api/category", CategoryRoute);
app.use("/api/description", DescriptionRoute);
app.use("/api/issue", IssueRoute);
app.use("/api/location", LocationRoute);
app.use("/api/summary", SummaryRoute);
app.use("/api/transaction", TransactionRoute);
app.use("/api/message", SendWhatsappRoute);

app.use("/api/iot", IOTRoute);
app.use("/api/auth", Auth);

app.use("/api/nobu", eventNobu);

app.use("/api/counter", CounterRoute);

app.use(
  "/api/gate",
  CallRoute(
    io,
    users,
    () => nextUserIndex,
    (val) => (nextUserIndex = val)
  )
);

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  socket.on("register", (userId: number) => {
    // Cari slot yang masih kosong
    const availableSlot = users.find((u) => u.id === null);

    if (availableSlot) {
      availableSlot.id = userId;
      availableSlot.socketId = socket.id;
      availableSlot.busy = false;

      console.log(`✅ User ${userId} registered with socket id ${socket.id}`);
    } else {
      console.log("⚠️ Semua slot user sudah terisi.");
    }
  });

  socket.on("disconnect", () => {
    const user = users.find((u) => u.socketId === socket.id);
    if (user) {
      console.log(`❌ User ${user.id} disconnected`);
      user.busy = false;
      user.socketId = null;
      user.id = null;
    }
  });

  socket.on("disconnect", () => {
    const user = users.find((u) => u.socketId === socket.id);
    if (user) {
      user.busy = false;
      user.id = null;
      console.log(`User ${socket.id} disconnected`);
    }
  });
});

checkArduinoTimeout();

server.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
