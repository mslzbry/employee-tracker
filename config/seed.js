const connection = require('../config/connection')
const fs = require('fs')

const parseSqlFile = sqlFile => {
  return sqlFile
    .toString()
    .replace(/(\r\n|\n|\r)/gm, ' ') // remove newlines
    .replace(/\s+/g, ' ') // excess white space
    .split(';') // split into all statements
}

const removeEmptyQueries = queries => {
  return queries.filter(q => q.length).filter(q => q != ' ')
}

const schema = parseSqlFile(
  fs.readFileSync(require('path').resolve(__dirname, '../db/schema.sql'))
)
const seed = parseSqlFile(
  fs.readFileSync(require('path').resolve(__dirname, '../db/seeds.sql'))
)

const queries = removeEmptyQueries([...schema, ...seed])

queries.forEach(q => {
  connection.query(q)
})

connection.end()
