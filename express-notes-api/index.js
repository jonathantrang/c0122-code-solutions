const express = require('express');
const app = express();
const notes = require('./data.json');
const jsonMiddleware = express.json();

app.use('/api/notes', jsonMiddleware);

app.get('/api/notes', (req, res) => {
  res.status(200).json(objToArr(notes));
});

app.get('/api/notes/:id', (req, res) => {
  if ((notes.notes.id) < 0) {
    res.status(400).json({ error: 'id must be a positive integer.' });
  }
  // } else if (notes.notes.key === obj.notes.id) {
  //   res.status(200).notes.n[id];
  // } else if (notes.key.content === undefined) {
  //   res.status(404).json[error](`cannot find note with id ${notes.key.id}`);
  // }
});

function objToArr(obj) {
  const arr = [];
  for (const key in obj.notes) {
    arr.push(obj.notes[key]);
  }
  return arr;
}

app.listen(3000, () => {
  console.log('Express server listening on port 3000!');
});
