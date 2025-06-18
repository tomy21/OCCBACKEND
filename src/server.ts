import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
dotenv.config();

// import { call, end } from "./controller/call.controller";
// import "./config/mqtt"; // pastikan terhubung
// import "./config/redis";

import CategoryRoute from "./routes/category/router";
import DescriptionRoute from "./routes/description/router";
import IssueRoute from "./routes/Issues/route";
import LocationRoute from "./routes/location/routes";
import IOTRoute from "./routes/iot/routes";
import CallRoute from "./routes/call/routes";
import SummaryRoute from "./routes/summary/routes";

import Auth from "./routes/login/routes";

import { checkArduinoTimeout } from "./jobs/cekStatusArduino";
import cookieParser from "cookie-parser";
import { fetchIntercomeSummary } from "./service/summaryCall";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3005;
const server = http.createServer(app); // << gunakan ini
const io = new SocketIOServer(server, {
  cors: { origin: "*" }, // sesuaikan jika perlu
});

const users = [
  { id: null as string | null, busy: false },
  { id: null as string | null, busy: false },
  { id: null as string | null, busy: false },
];

let nextUserIndex = 0;

app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// app.post("/api/call", call);
// app.post("/api/end-call", end);

app.use("/api/category", CategoryRoute);
app.use("/api/description", DescriptionRoute);
app.use("/api/issue", IssueRoute);
app.use("/api/location", LocationRoute);
app.use("/api/summary", SummaryRoute);

app.use("/api/iot", IOTRoute);
app.use("/api/auth", Auth);

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

  socket.on("register", (userNumber: number) => {
    if (userNumber >= 1 && userNumber <= 3) {
      users[userNumber - 1].id = socket.id;
      users[userNumber - 1].busy = false;
      console.log(`User ${userNumber} registered with socket id ${socket.id}`);
    }
  });

  socket.on("call-ended", () => {
    const user = users.find((u) => u.id === socket.id);
    if (user) {
      user.busy = false;
      console.log(`User ${socket.id} finished call`);
    }
  });

  socket.on("disconnect", () => {
    const user = users.find((u) => u.id === socket.id);
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
