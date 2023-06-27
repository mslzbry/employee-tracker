const mysql = require("mysql2");
require('dotenv').config();

const connection = mysql.createConnection(
  {
    host: 'localhost',
    port: 3306,
    user: process.env.DB_USER,
    database: process.env.DB_NAME, 
    password: process.env.DB_PASSWORD 
  },
  console.log('Connected to the employees database.')
);

module.exports = connection;
