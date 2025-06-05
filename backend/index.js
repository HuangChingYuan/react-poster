import express from "express";
import { connectDB } from "./config/db.js";
import postRoutes from "./routes/post.route.js";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.listen(5000, () => {
  connectDB();
  console.log("server started at http://localhost:5000");
});

app.use("/posts", postRoutes);
