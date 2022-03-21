const express = require('express');
const app = express();
let nextId = 1;
const grades = {};
const jsonParse = express.json();

app.get('/api/grades', (req, res) => {
  res.json(objToArr());
});

app.use('/api/grades', jsonParse);

app.post('/api/grades', (req, res) => {
  req.body.id = nextId++;
  grades[req.body.id] = req.body;
  res.status(201).send(req.body);
  console.log(req.body);
});

function objToArr() {
  const arr = [];
  for (const key in grades) {
    arr.push(grades[key]);
  }
  return arr;
}

app.listen(3000, () => {
  console.log('Express server listening on port 3000!');
});
