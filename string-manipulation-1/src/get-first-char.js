/* exported getFirstChar */
/*
1. Understand the prompt
  Get the first character of a given string
  Input: LearningFuze
  Output: "L"

2. Figure out how to reach output seperate from code
  How to get get from LearningFuze -> L?

3. Write down the list of steps necessary to replicate the process and test
  a. How to start?
    - Create a system to execute when given any string
  b. Does this system need a storage?
    - Stores the first letter of the string
  c. How to get values?
    - Find the first array value of the string
  d. How to exit?
    - Return the result of what was stored

4. Translate the code
*/

function getFirstChar(string) {
  var firstChar = string.charAt(0);
  return firstChar;
}
