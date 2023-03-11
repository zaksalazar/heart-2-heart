const express = require('express');
const mongodb = require('mongodb').MongoClient;
const genericItems = require('./data');
const db = require('../config/connection.js')

const app = express();
const port = 3001;

const connectionStringURI = (process.env.MONGODB_URI)

db.collection('genericItems').insertMany(genericItems, (err, res) => {
  if (err) {
    return console.log(err);
  }
  console.log(res);
});