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

app.put('/data/:id', (req, res) => {
  let data = {name: req.body.name};
  let sql = `UPDATE mytable SET ? WHERE id = ${req.params.id}`;
  db.query(sql, data, (err, result) => {
    if (err) throw err;
    res.send('Data updated');
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
