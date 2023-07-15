const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

let items = [];

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.get("/items", (req, res) => {
  res.send(items);
});

app.post("/items", (req, res) => {
  const item = req.body;
  items.push(item);
  res.send("Item added successfully");
});

app.put("/items/:id", (req, res) => {
  const id = req.params.id;
  const item = req.body;
  items[id] = item;
  res.send("Item updated successfully");
});

app.delete("/items/:id", (req, res) => {
  const id = req.params.id;
  items.splice(id, 1);
  res.send("Item deleted successfully");
});

app.listen(port, () => {
  console.log(`CRUD API listening at http://localhost:${port}`);
});
