const mysql = require('mysql2')
const fs = require('fs')
require('dotenv').config()

const schemaQuery = fs.readFileSync(
  require('path').resolve(__dirname, '../db/schema.sql'),
  {
    encoding: 'utf-8'
  }
)

const seedQuery = fs.readFileSync(
  require('path').resolve(__dirname, '../db/seeds.sql'),
  {
    encoding: 'utf-8'
  }
)

const connection = mysql.createConnection(
  {
    host: 'localhost',
    port: 3306,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
  },
  console.log('Connected to the employees database.')
)

const buildSchemaQuery = connection => {
  console.log('schemaaa')
  connection.query(schemaQuery, err => {
    if (err) {
      console.log(err)
      throw err
    }

    console.log('SQL initial schema query completed')
  })
}

const runSeedQuery = connection => {
  console.log('weee')
  connection.query(seedQuery, err => {
    if (err) {
      console.log(err)
      throw err
    }

    console.log('SQL seed query completed')
  })
}
module.exports = { connection, runSeedQuery, buildSchemaQuery }
