/* exported tail */
/*
1. Understand the prompt
  Make an array with all elements in array after first
  Input: ['foo', 'bar', 'baz']
  Output: 'bar', 'baz'
  Input: [false, true, false, true]
  Output: true, false, true

2. Figure out how to reach output seperate from code
  How to get get from [false, true, false, true] -> true, false, true?

3. Write down the list of steps necessary to replicate the process and test
  a. How to start?
    - Create a system to execute when given an array
  b. Does this system need a storage?
    - Stores a new array
  c. How to get values?
    - System that repeats itself
    - Will check each element in the array
    - The first element will be ignored
    - THe following element will be included
  d. How does the repeatable system work?
    - Contains a storage that reflects the first number of the list
    - Will keep repeating if the storage value is less that the length of the array
    - Will increment by 1 to get closer to the array length
  e. What happens when the system repeats?
    - Will spit new values into the storage from step b
  f. How to exit?
    - Return the result of what was stored

4. Translate the code
*/

function tail(array) {
  var lastValues = [];
  for (var i = 0; i < array.length; i++) {
    if (i === 0) {
      continue;
    } else lastValues.push(array[i]);
  }
  return lastValues;
}
