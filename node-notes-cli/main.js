const fs = require('fs');
const jsonData = require('./data.json');
const action = process.argv[2];

if (action === 'read') {
  for (const key in jsonData.notes) {
    console.log(`${key}: ${jsonData.notes[key]}`);
  }
} else if (action === 'create') {
  console.log('Create');
} else if (action === 'update') {
  console.log('Edit');
} else if (action === 'delete') {
  console.log('Delete');
} else console.log('Please enter proper command.');

function renderJSON() {
  const jsonText = JSON.stringify(jsonData, null, 2);
  fs.writeFile('data.json', `${jsonText}`, 'utf8', err => {
    if (err) throw err;
  });
}
