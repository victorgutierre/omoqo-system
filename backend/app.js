import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

import { shipsRouter } from "./routes/ships.js";

// parse requests of content-type: application/x-www-form-urlencoded
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to OMOQO API" });
});

app.use("/api/ships", shipsRouter);

// set port, listen for requests
app.listen(8080, () => {
  console.log("Server is running on port 8080.");
});