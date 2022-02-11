/* exported last */
/*
1. Understand the prompt
  Get the value of the last index of an array
  Input: ['foo', 'bar', 'baz']
  Output: 'baz'
  Input: [false, true, false, true]
  Output: true

2. Figure out how to reach output seperate from code
  How to get get from [false, true, false, true] -> true?

3. Write down the list of steps necessary to replicate the process and test
  a. How to start?
    - Create a system to execute when given an array
  b. Does this system need a storage?
    - No
  c. How to get values?
    - System that repeats itself
    - Get to the last index
    - The array's length - 1
  d. How to exit out the system?
    - Return the result of the array at the last index

4. Translate the code
*/

function last(array) {
  return array[array.length - 1];
}
