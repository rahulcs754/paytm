const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mainRoute = require("./routes/index");
const app = express();
require("dotenv").config();
mongoose.connect(process.env.DB_URI);
app.use(cors());
app.use(express.json());

app.use("/api/v1/", mainRoute);

app.listen(process.env.PORT);

console.log(`App runing in ${process.env.PORT} PORT`);
