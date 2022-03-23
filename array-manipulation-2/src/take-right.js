/* exported takeRight */
/*
1. Understand.
  Given parameters array and count return a new array with only the array from with the given count from the right.

2. Clarify.
  If array is [1, 2, 3, 4] and the count is 2 then returns [3, 4].
  How to get array to start at 3?
    array length - count
  If the count is -1 then it returns the full amount of the array.
  If the array is empty? Returns an empty array.

3. Pseudocode.
  Define a function with the parameters of array and count.
  Create a condition statement that if count is less than 0 then return the given array
  Create a condition statement that if count is more than 0 then code will run
  Create a variable that is an empty array
  Create a loop
    Initializes at 0
    Condition for the loop to go is if the initialization is less than the count
      If it is then push the value of the array at an index of the array.length minus count plus the initialization
    Increment by 1
  Return the empty array.

4. Trace.
5. Code.
6. Trace.
*/

function takeRight(array, count) {
  if (count < 0 || count > array.length) {
    return array;
  } else {
    const newArray = [];
    for (let i = 0; i < count; i++) {
      newArray.push(array[(array.length - count) + i]);
    }
    return newArray;
  }
}
