const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const db = require("./config/connection");
const path = require("path");

const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server is running here ${PORT}`);
  });
});
