/* exported getLastChar */
/*
1. Understand the prompt
  Get the first character of a given string
  Input: LearningFuze
  Output: "e"

2. Figure out how to reach output seperate from code
  How to get get from LearningFuze -> e?

3. Write down the list of steps necessary to replicate the process and test
  a. How to start?
    - Create a system to execute when given any string
  b. Does this system need a storage?
    - Stores the last letter of the string
  c. How to get values?
    - Find the last array value of the string
    - The last array value will be defined as the strings length - 1
  d. How to exit?
    - Return the result of what was stored

4. Translate the code
*/

function getLastChar(string) {
  var lastChar = string.charAt(string.length - 1);
  return lastChar;
}
