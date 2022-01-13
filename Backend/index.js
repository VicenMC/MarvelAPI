const express = require("express");
const morgan = require("morgan");
const server = express();
const router = require("./routes/routes.js");
var bodyParser = require("body-parser");
const cors = require("cors");

require('dotenv').config();

server.use(
  cors({
    origin: '*',
  })
);
const PORT = 3001;
server.use(express.json());
server.use(morgan("dev"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use("/", router);
server.get("*", (req, res) => {
  res.status(400).json({ error: "Page not found" });
});
server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
})