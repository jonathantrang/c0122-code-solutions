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
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"z
  `;
  db.query(sql)
    .then(result => {
      const grade = (result.rows[0]);
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

app.listen(3000, () => {
  console.log('Express server is listening on port 3000!');
});
