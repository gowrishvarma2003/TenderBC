const mongoose = require('mongoose');

const login = new mongoose.Schema({
    email: String,
    password: String,
  });
  
module.exports = mongoose.model('login', login);