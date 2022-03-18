const fs = require('fs');
const read = fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) throw err;
  const userData = JSON.parse(data);
  const notes = JSON.stringify(userData.notes, null, 2);
  console.log(notes);
});

module.exports = read;
