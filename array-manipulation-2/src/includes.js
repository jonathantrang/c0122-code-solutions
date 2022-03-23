/* exported includes */
/*
1. Understand
  Given an array and value return a boolean if the value is there in the array
2. Clarify
  If the array is empty? False

3. Pseudocode
  Define a function with parameters array and value
  Create a loop
    Initialization starts at 0
    Checks to see if the initial value is less than the array length
      If it is then does an if statement.
        If statement checks to see if index at array is equal to the value
        If it is returns true
        If it is not then continues loop
    By end of the loop if it is not true then return false

4. Trace
5. Code
6. Trace

*/

const includes = (array, value) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  } return false;
};
