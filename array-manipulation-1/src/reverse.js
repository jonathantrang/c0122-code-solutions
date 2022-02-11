/* exported reverse */
/*
1. Understand the prompt
  Make an array with all elements in array after first
  Input: ['foo', 'bar', 'baz']
  Output: ['baz', 'bar', 'foo']
  Input: [false, true, false, true]
  Output: [true, false, true, false]

2. Figure out how to reach output seperate from code
  How to get get from [false, true, false, true] -> [true, false, true, false]?

3. Write down the list of steps necessary to replicate the process and test
  a. How to start?
    - Create a system to execute when given an array
  b. Does this system need a storage?
    - Stores a new array
  c. How to get values?
    - System that repeats itself
    - Will check each element in the array
    - Elements leading up to the last will be included
    - Last element will be ignoreed
  d. How does the repeatable system work?
    - Contains a storage that reflects the last number of the list
    - Will keep repeating if the storage value is greater than or equal to 0
    - Will increment by 1 to get closer to 0
  e. What happens when the system repeats?
    - Will spit new values into the storage from step b
  f. How to exit?
    - Return the result of what was stored

4. Translate the code
*/

function reverse(array) {
  var reverseArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
   reverseArray.push(array[i]);
  }
  return reverseArray;
}
