/* exported drop */
/*
1. Understand
  Given an array and count return a new array that only has the remaining index.
2. Clarify
  If array is [1, 2, 3] and count was 2 then the return is [3]
  What if the count is more than the array?
    Returns an empty array.

3. Pseudocode
  Define a function with the parameters array and count
  Create a conditional that checks to see if count is more than array
    If so then return an empty array
  Otherwise have a variable that is equal to the given array with a method of slice and its argument is the count.
4. Trace
5. Code
6. Trace

*/

function drop(array, count) {
  if (count > array) {
    return [];
  }
  var newArray = array.slice(count);
  return newArray;
}
