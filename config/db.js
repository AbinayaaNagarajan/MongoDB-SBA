// config/db.js
const mongoose = require('mongoose');

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose;
