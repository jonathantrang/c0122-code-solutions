/* exported chunk */
/*
1. Understand.
  Given parameters array and size return an array containing subarrays.
  The subarrays length is equal to the given size parameter.

2. Clarify.
  If array is [1, 2, 3, 4] and the size is 2 then returns [[1, 2], [3, 4].
    How to get?
      Create a variable that stores the new array

3. Pseudocode.
  Define a function with the parameters of array and size.
  Create a variable that is an empty array
  Create a loop
    Initializes at 0
    Condition for the loop to go is if the initialization is less than the array.length
      If it is then push a new array into the empty array storage
        The new array will start at the incrementing value and end at the incrementing value + whatever the size parameter is
    Increment by the incrementing value plus the given size parameter
  Return the empty array.

4. Trace.
5. Code.
6. Trace.
*/

function chunk(array, size) {
  const newArray = [];
  for (let i = 0; i < array.length; i+=size) {
    newArray.push(array.slice(i, i + size));
    }
  return newArray;
}
