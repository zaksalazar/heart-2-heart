
const express = require("express");
require("dotenv").config();

const db = require('./config/connection')
const Users = require('./models/users')
const genericItems = require('./models/genericItems')
const supplies = require('./models/supplies')
const mongoose = require("mongoose");

const app = express();
const PORT = 3001;
app.use(express.json());

  db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});


