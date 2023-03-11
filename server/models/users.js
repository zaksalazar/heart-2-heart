const { Schema, model, Types } = require("mongoose");
const mongoose = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+..+/, "Must match an email address!"],
    },
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
  },
  // {
  //   toJSON: {
  //     virtuals: true,
  //   },
  //   id: false,
  // }
);

const Users = mongoose.model('users', userSchema);

const handleError = (err) => console.error(err);

Users.create(
  {
  username: 'Test User',
  email: 'test@example.com',
  firstname: 'Test',
  lastname: 'User', 
  },
  (err) => (err ? handleError(err) : console.log('Created new document'))
); 

module.exports = Users;