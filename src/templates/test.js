const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  createdAt: Date,
  UpdatedAt: Date
});

module.exports = mongoose.model( "User", userSchema );