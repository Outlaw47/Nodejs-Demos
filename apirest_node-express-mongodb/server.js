require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", (error) => console.error());
db.once("open", () => console.log("Connected to MongoDB"));

app.use(express.json());

const susbscribersRouter = require("./routes/subscribers");
app.use("/subscribers", susbscribersRouter);

app.listen(port, () => console.log("Express server started"));
