const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(number => (number % 2 === 0));
console.log('List of even numbers:', evenNumbers);

const overFive = numbers.filter(number => (number > 5));
console.log('Numbers that are over 5:', overFive);

const startWithE = names.filter(name => (name[0] === 'E'));
console.log('Names that start with E:', startWithE);

const haveD = names.filter(name => (name.includes('D') || (name.includes('d'))));
console.log('Names with D or d:', haveD);
