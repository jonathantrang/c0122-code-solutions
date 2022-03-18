const fs = require('fs');
const jsonData = require('./data.json');
const action = process.argv[2];

if (action === 'read') {
  for (const key in jsonData.notes) {
    console.log(`${key}: ${jsonData.notes[key]}`);
  }
} else if (action === 'create') {
  jsonData.notes[`${jsonData.nextId++}`] = process.argv[3];
  renderJSON();
} else if (action === 'update') {
  jsonData.notes[process.argv[3]] = process.argv[4];
  renderJSON();
} else if (action === 'delete') {
  delete jsonData.notes[process.argv[3]];
  renderJSON();
} else console.log('Please enter proper command.');

function renderJSON() {
  const jsonText = JSON.stringify(jsonData, null, 2);
  fs.writeFile('data.json', `${jsonText}`, 'utf8', err => {
    if (err) throw err;
  });
}
