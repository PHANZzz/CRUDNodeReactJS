// server.js
const express = require('express');
const app = express();
const mysql = require('mysql');

// create connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydatabase'
});

// connect to database
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

app.get('/data', (req, res) => {
  let sql = 'SELECT * FROM mytable';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
