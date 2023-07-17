const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://sam-admin:pass353@cluster0.7aksc.mongodb.net/socialmedia3?retryWrites=true&w=majority');

module.exports = mongoose.connection;
