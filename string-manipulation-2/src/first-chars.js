/* exported firstChars */
/*
1. Understand
  Given two parameters (a number representing length and a string with words)
  Return the length of characters from that string
2. Clarify
  What if string is empty?
    Return 0
  What if the given number is more than what the word holds?
    Stop at the given length of the string
3. Pseudocode
  Create a function with two parameters number and string
  Create an empty string
  Create an if statement if the length of the string is more than 1
    Create a loop that stops at the given length and the length of the string
    Concantenate the letter into the string
    Returns the new string
  Otherwise return an empty string
4. Trace
  (8, 'All Code All Day')
  string.length = 16
  All Code
5. Code
6. Trace
*/

function firstChars(length, string) {
  var newString = '';
  if (string.length > 0) {
    for (var i = 0; i < string.length && i < length; i++) {
      newString += string[i];
    }
  } else return newString;
  return newString;
}
