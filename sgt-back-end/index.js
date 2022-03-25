// const fs = require('fs');
const express = require('express');
const app = express();
const pg = require('pg');
const jsonMiddleware = express.json();
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use('/api/grades', jsonMiddleware);

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grade = (result.rows);
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grades with ${grade}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error has occured.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const score = Number(req.body.score);
  const text = 'INSERT INTO grades(name, course, score) VALUES ($1, $2, $3) RETURNING *';
  const values = [req.body.name, req.body.course, req.body.score];
  if (!values) {
    res.status(400).json({
      error: 'Invalid grade, please put in a proper name, course, and score.'
    });
    return;
  } else if (score > 100 || score < 0) {
    res.status(400).json({
      error: 'Score must be a positive integer between 0 and 100.'
    });
    return;
  }
  db.query(text, values)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error has occured.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const score = Number(req.body.score);
  const id = Number(req.params.gradeId);
  const text = 'UPDATE "grades" SET "name" = $1, "course" = $2, "score" = $3 WHERE "gradeId" = $4 RETURNING *';
  const values = [req.body.name, req.body.course, req.body.score, id];
  if (!values) {
    res.status(400).json({
      error: 'Invalid grade, please put in a proper name, course, and score.'
    });
    return;
  } else if (score > 100 || score < 0) {
    res.status(400).json({
      error: 'Score must be a positive integer between 0 and 100.'
    });
    return;
  } else if (!id) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }
  db.query(text, values)
    .then(result => {
      if (!result.rows[0]) {
        res.status(404).json({
          error: `gradeId ${id} does not exist`
        });
      } else {
        const grade = result.rows[0];
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error has occured.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const id = Number(req.params.gradeId);
  const text = 'DELETE FROM "grades" WHERE "gradeId" = $1 RETURNING *';
  const values = [id];
  if (!id) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }
  db.query(text, values)
    .then(result => {
      if (!result.rows.length) {
        res.status(404).json({
          error: `gradeId ${id} does not exist`
        });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error has occured.'
      });
    });
});

app.listen(3000, () => {
  console.log('Express server is listening on port 3000!');
});
