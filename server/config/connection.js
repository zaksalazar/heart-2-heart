const mongoose = require('mongoose');
console.log(process.env.MONGODB_URI + ' this is a test for uri key ')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/heart2heart', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;