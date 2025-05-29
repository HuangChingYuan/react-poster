const express = require("express");
const { connectDB } = require("./config/db");

const app = express();

app.use(express.json());

app.listen(5000, () => {
  connectDB();
  console.log("server started at http://localhost:5000");
});
