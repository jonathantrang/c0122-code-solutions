function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('There are ' + convertMinutesToSecondsResult + ' seconds in a minute.');

function greet(name) {
  var greet = 'Hey, ' + name + '!';
  return greet;
}
var greetName = greet('Beavis');
console.log(greetName);

function getArea(width, height) {
  var area = width * height;
  return area;
}
var areaResult = getArea(17, 42);
console.log('The area is: ' + areaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var firstNameResult = getFirstName({ firstName: 'LeLouch', lastName: 'Lamparouge' });
console.log(firstNameResult + ' did nothing wrong.');

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var lastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('I\'m Hank Hill and I sell: ' + lastElementResult + '.');
