const mysql = require('mysql2')
const express = require('express')
const cors = require('cors')

const app = express()

const port = 3001
app.use(cors())

const config = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'lowCodeTemplate'
}

const connection = mysql.createConnection(config)

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err)
    return
  }
  console.log('Connected to the database')
})

app.get('/api/data', (req, res) => {
  const SQL_QUERY = 'SELECT * FROM fields_types'
  connection.query(SQL_QUERY, (err, results) => {
    if (err) {
      console.error('Error executing query:', err)
      return
    }
    res.json(results)
    // console.log('Results:', results)
  })
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
