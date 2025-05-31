import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

// import { call, end } from "./controller/call.controller";
// import "./config/mqtt"; // pastikan terhubung
// import "./config/redis";

import CategoryRoute from "./routes/category/router";
import DescriptionRoute from "./routes/description/router";
import IssueRoute from "./routes/Issues/route";
import LocationRoute from "./routes/location/routes";

const app = express();
const port = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());

// app.post("/api/call", call);
// app.post("/api/end-call", end);

app.use("/api/category", CategoryRoute);
app.use("/api/description", DescriptionRoute);
app.use("/api/issue", IssueRoute);
app.use("/api/location", LocationRoute);

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
