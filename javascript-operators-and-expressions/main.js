// new number value via multiplication
var width = 1000;
var height = 1000;
var area = width * height;
console.log('The area is: ', area);
console.log('The typeof is: ', typeof area);

// new number value via subtraction
var payment = 100;
var bill = 99;
var change = payment - bill;
console.log('Total change is: ', change);
console.log('The typeof is: ', typeof change);

// new number value via division
var quizzes = 50;
var midterm = 100;
var final = 100;
var grade = ((quizzes + midterm + final) / 3);
console.log('Final grade is: ', grade);
console.log('typeof for grade is: ', typeof grade);

// new string value via concantenation
var firstName = 'Jonathan';
var lastName = 'Trang';
var fullName = firstName + ' ' + lastName;
console.log('Full name is: ', fullName);
console.log('typeof for fullName is: ', typeof fullName);

// new boolean value via less than sign
var ph = 7;
var isAcidic = ph < 7;
console.log('Value is acidic: ', isAcidic);
console.log('typeof for isAcidic: ', typeof isAcidic);

// new boolean value via equal to sign
var headCount = 300;
var isSparta = headCount === 300;
console.log('This is Sparta: ', isSparta);
console.log('typeof for isSparta: ', typeof isSparta);

// new string value via +=
var motto = fullName;
motto += ' is the GOAT!';
console.log('Who is the GOAT?: ', motto);
console.log('typeof motto is: ', typeof motto);
