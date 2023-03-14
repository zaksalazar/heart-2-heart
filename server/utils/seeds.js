const express = require('express');
const genericItems = require('./data');
const db = require('../config/connection.js')

const app = express();
const port = 3001;

db.collection('genericItems').insertMany(genericItems, (err, res) => {
    if (err) {
        return console.log(err);
    }
    console.log(res)
    });