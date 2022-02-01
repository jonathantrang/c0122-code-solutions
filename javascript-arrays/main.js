// an array literal
var colors = ['red', 'white', 'blue'];
console.log('The first color with index of 0:', colors[0]);
console.log('The first color with index of 1:', colors[1]);
console.log('The first color with index of 2:', colors[2]);
console.log('America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.');

// changes 2nd index of array into a different value
colors[2] = 'green';
console.log('Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.');
console.log('List of colors are: ', colors);

// another array literal
var students = ['Jeff ', ' Jefe', ' Jefiner', 'Jef'];
var numberOfStudents = students.length;
console.log('There are ' + numberOfStudents + ' students in the class.');
var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
console.log('The last student in the class is:' + ' ' + lastStudent + '.');
console.log('The students in the class are: ', students);
