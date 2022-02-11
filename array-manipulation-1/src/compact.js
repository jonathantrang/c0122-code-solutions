/* exported compact */
/*
1. Understand the prompt
  Make an array that doesn't inc
  lude null, false, NaN, "", 0, -0, undefined
  This array also has to maintain truthy statement order
  Input: [true, true, false, true]
  Output: [true, true, true]
  Input: [{}, {}, null, {}]
  Output: [{}, {}, {}]
  Input: [1, 2, 3, 4, 5, NaN, 6]
  Output: [1, 2, 3, 4, 5, 6]
  Input: [-0, 1, 2, 3, 4, 0, 5]
  Output: [1, 2, 3, 4, 5]
  Input: ["", "word", "", "two", "much", ""]
  Output: ["word", "two", "much"]
  Input: [1, "a", {}, [], true]
  Output: [1, "a", {}, [], true]

2. Figure out how to reach output seperate from code
  How to omit several elements in an array?
  How to keep truthy order?

3. Write down the list of steps necessary to replicate the process and test
  a. How to start?
    - Create a system to execute when given an array
  b. Does this system need a storage?
    - Stores a new array
  c. How to get values?
    - System that repeats itself
    - Will check each element in the array
    - If the element has something that should not be included then it will be ignored
  d. How does the repeatable system work?
    - Contains a storage that reflects the beginning of the array
    - Will keep repeating if the storage value is less than the array length
    - Will increment by 1 to get closer to array length
  e. What happens when the system repeats?
    - Will spit new values into the storage from step b
  f. How to exit?
    - Return the result of what was stored

4. Translate the code
*/

function compact(array) {
  var acceptable = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      acceptable.push(array[i]);
    }
  }
  return acceptable;
}
