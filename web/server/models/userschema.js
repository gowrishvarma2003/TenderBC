// models/User.js
const { int } = require('hardhat/internal/core/params/argumentTypes');
const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  pincode: String,
  city: String,
  state: String,
  country: String
});

const userSchema = new mongoose.Schema({
  _id : Number,
  name: String,
  email: String,
  contact: String,
  address: addressSchema,
  established: String,
  password: String,
  biddedtenders: [Number],
});

module.exports = mongoose.model('users', userSchema);