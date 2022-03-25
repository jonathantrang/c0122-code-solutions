const takeAChance = require('./take-a-chance');

const promise = takeAChance('Jonathan');
promise.then(value => {
  console.log(value);
}).catch(error => {
  console.error(error.message);
});
