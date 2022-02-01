// uses .notation
var student = {
  firstName: 'Jonathan',
  lastName: 'Trang',
  age: 25
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('My name is:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Food Service';

console.log('I live in Irvine:', student.livesInIrvine);
console.log('I used to work in:', student.previousOccupation);
console.log('I am:', student);

// uses [] notation
var vehicle = {
  make: 'Tesla',
  model: 'Cybertruck',
  year: '2023'
};

vehicle['color'] = 'Space Grey';
vehicle['isConvertible'] = false;

console.log('The color of a cybertruck is:', vehicle['color']);
console.log('The cybertruck is a convertible:', vehicle['isConvertible']);
console.log('My favorite vehicle is:', vehicle);

// delete items from an object
var pet = {
  name: 'Max',
  type: 'Chihuahua Terrier'
};

delete pet.name;
delete pet.type;
console.log(pet);
