// Math Object Method
var x = 1;
var y = 3;
var z = 99;
var maximumValue = Math.max(x, y, z);
console.log('The max value is: ', maximumValue);

var heroes = ['Omniman', 'One Punch Man', 'All-Might', 'Eren Jaeger'];
var randomNumber = Math.random(heroes);
var randomNumberFinal = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumberFinal);
console.log('The random index value is: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('Your hero is: ', randomHero);

// Array Methods
var library = [
  {
    title: 'Flags of Our Fathers',
    author: 'James Bradley'
  },
  {
    title: 'Inferno',
    author: 'Dante Alighieri'
  },
  {
    title: 'Odyssey',
    author: 'Homer'
  }
];

var lastBook = library.pop();
console.log('The last book is: ', lastBook);

var firstBook = library.shift();
console.log('The first book is: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('The new library listing is: ', library);

// string methods
var fullName = 'Jonathan Trang';
var firstAndLastName = fullName.split(' ');
console.log('The first and last name is: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Say my name and you can say it with honor: ', sayMyName);
