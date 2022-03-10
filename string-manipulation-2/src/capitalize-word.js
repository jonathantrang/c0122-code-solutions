/* exported capitalizeWord */

/* 1. Undertand prompt
Return the value of word but it is properly cased
Word is a string value

2. Without writing code how to get solution?
How to get proper casing?
What if casing is like JavaScript where the middle letter is capitalized?

3. Write steps to achieve solution
  A. Create a function with the parameters of word
  B. Create a variable that stores the string given and made lower case
  C. If the word is javascript or any variation it will be forced to be JavaScript
  D. Declare variable that stores the first character of the lower case word and makes it upper case
  E. Declare variable that stores the lower case word excluding its first character
  F. Return the new value from the variable made

4. Write code
*/

function capitalizeWord(word) {
  var lowerCase = word.toLowerCase();
  if (lowerCase === 'javascript') {
    return 'JavaScript';
  }
  var upperCaseLetter = lowerCase[0].toUpperCase();
  var lowerCaseWord = lowerCase.slice(1, lowerCase.length);
  return upperCaseLetter + lowerCaseWord;
}
