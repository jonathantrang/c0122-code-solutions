/* exported truncate */

/* 1. Understand the prompt.
Create a return value of string concatenated with an ellipses.
The string is depenedent on what the number is for the length.

2. How to reach the result without writing code?
How long is the string?
How does the number given effect the length of the string?
How to put an ellipses on the result
What if the length given is more than the string length?

3. Write steps to get solution
  A. Declare a function that will shorten the string depending on the length given
  B. Declare a variable that will store the value
  C. Create an if statement that will figure out if the length is more than 0
    a. If more than 0 then a loop will occur
  D. The loop will start at 0 and end at the length given
    a. Each time the loop goes it will add the letter at the set index to the empty variable
  E. Once the loop finishes the result will be concatenated with an elipses and return from the function

4. Write code
*/

function truncate(length, string) {
  var truncatedValue = '';
  if (string.length > 0) {
    for (var i = 0; i < length && i < string.length; i++) {
      truncatedValue += string[i];
    }
  }
  return truncatedValue + '...';
}
