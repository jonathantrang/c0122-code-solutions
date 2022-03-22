const express = require('express');
const app = express();
const dataJSON = require('./data.json');
const jsonMiddleware = express.json();
const notesObj = dataJSON.notes;
const fs = require('fs');

app.use('/api/notes', jsonMiddleware);

app.get('/api/notes', (req, res) => {
  res.status(200).json(objToArr(dataJSON));
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!notesObj[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else if (Number.isInteger(id) && id > 0) {
    res.status(200).json(notesObj[id]);
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    req.body.id = dataJSON.nextId++;
    notesObj[req.body.id] = req.body;
    fs.writeFile('data.json', JSON.stringify(dataJSON, null, 2), 'utf-8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured.' });
      } else {
        res.status(201).json(req.body);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!notesObj[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else if (Number.isInteger(id) && id > 0) {
    delete notesObj[id];
    fs.writeFile('data.json', JSON.stringify(dataJSON, null, 2), 'utf-8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured.' });
      } else {
        res.status(204).json();
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (!notesObj[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    notesObj[id] = req.body;
    notesObj[id].id = id;
    fs.writeFile('data.json', JSON.stringify(dataJSON, null, 2), 'utf-8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured' });
      } else {
        res.status(200).json(notesObj[id]);
      }
    });
  }
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
