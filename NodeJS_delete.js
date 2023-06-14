// server.js
const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

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

app.delete('/data/:id', (req, res) => {
  let sql = `DELETE FROM mytable WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send('Data deleted');
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
