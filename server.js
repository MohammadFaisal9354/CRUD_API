const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./db');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a new record
app.post('/records', (req, res) => {
  const record = req.body;
  connection.query('INSERT INTO records SET ?', record, (err, result) => {
    if (err) throw err;
    res.send('Record added successfully!');
  });
});

// Retrieve all records
app.get('/records', (req, res) => {
  connection.query('SELECT * FROM records', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// Update a record
app.put('/records/:id', (req, res) => {
  const id = req.params.id;
  const record = req.body;
  connection.query('UPDATE records SET ? WHERE id = ?', [record, id], (err, result) => {
    if (err) throw err;
    res.send('Record updated successfully!');
  });
});

// Delete a record
app.delete('/records/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM records WHERE id = ?', id, (err, result) => {
    if (err) throw err;
    res.send('Record deleted successfully!');
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000!');
});




//node server.js