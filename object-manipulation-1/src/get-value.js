/* exported getValue */
/*
1. Understand the prompt
  Retrieve the value of the key property that is in the object
  Input: {firstName: 'David', lastName: 'Thomas'}
  Output: David, Thomas

2. Figure out how to reach output seperate from code
    How to get the value of the key property?

3. Write down the list of steps necessary to replicate the process and test
  a. How to start?
    - Create a system to execute when given an array
  b. Does this system need a storage?
    - No
  c. How to get values?
    - Result of the key in the object
  f. How to exit?
    - Return the result

4. Translate the code
*/

function getValue(object, key) {
  return object[key];
}
