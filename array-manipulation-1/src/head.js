/* exported head */
/*
1. Understand the prompt
  Get the value of the first index of an array
  Input: ['foo', 'bar', 'baz']
  Output: 'foo'
  Input: [false, true, false, true]
  Output: false

2. Figure out how to reach output seperate from code
  How to get get from [false, true, false, true] -> false?

3. Write down the list of steps necessary to replicate the process and test
  a. How to start?
    - Create a system to execute when given an array
  b. Does this system need a storage?
    - No
  c. How to get values?
    - System that repeats itself
    - Get to the first index
    - The array at 0
  d. How to exit out the system?
    - Return the result of the array at the first index

4. Translate the code
*/

function head(array) {
  return array[0];
}
