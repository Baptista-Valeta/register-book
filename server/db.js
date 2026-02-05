const mongoose = require('mongoose');

const dbUri = "mongodb+srv://admin:admin@cluster0.4khd2dh.mongodb.net/book_register_db?appName=Cluster0";

module.exports = () => mongoose.connect(dbUri)