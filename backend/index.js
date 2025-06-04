import express from "express";
import { connectDB } from "./config/db.js";

import postRoutes from "./routes/post.route.js";

const app = express();

app.use(express.json());

app.listen(5000, () => {
  connectDB();
  console.log("server started at http://localhost:5000");
});

app.use("/posts", postRoutes);
