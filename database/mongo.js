//Database credentials
require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.DB_URL;

const connectDB = () => {
  mongoose
    .connect(url)
    .then(() => {
      console.log('connected succesfully to the database');
    })
    .catch((err) => {
      console.log('connection failed: ', err);
    });
};

module.exports = connectDB;
