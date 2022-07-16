const express = require("express");
const cors = require("cors");
const router = require("./router");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);
app.use(router);
app.use(cookieParser());


module.exports = app;