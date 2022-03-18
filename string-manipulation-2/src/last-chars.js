/* exported lastChars */
/*
1. Understand
  Given two parameters (a number representing length and a string with words)
  Return the last length of characters from that string
2. Clarify
  What if string is empty?
    Return 0
  What if the given number is more than what the word holds
    Stop at the given length of string
3. Pseudocode
  Create a function with parameters length and string
  Create a variable that stores an empty string
  Create an if statement that checks if length is more than string string length
    Create a for loop
      Starts at 0
      If its less than string length and given string
      Once the iteration finishes increment the starting value
  Create an else if statement if string length is more than 0
    Create a for loop
      That starts at length of the given string minus the given length
      With the condition that the given string minus the given length is less than the length of the string
      Increments each time the loop runs
    Each time loop runs value of the string at that index is concantenated to that string
  Otherwise return an empty string

4. Trace

5. Code

6. Trace

*/
function lastChars(length, string) {
  var newString = '';
  if (length > string.length) {
    for (var i = 0; i < string.length && i < length; i++) {
      newString += string[i];
    }
  } else if (string.length > 0) {
    for (i = (string.length - length); i < string.length || i < length; i++) {
      newString += string[i];
    }
  } else return newString;
  return newString;
}
