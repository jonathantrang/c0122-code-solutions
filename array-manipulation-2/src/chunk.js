/* exported chunk */
/*
1. Understand.
  Given parameters array and size return an array containing subarrays.
  The subarrays length is equal to the given size parameter.

2. Clarify.
  If array is [1, 2, 3, 4] and the size is 2 then returns [[1, 2], [3, 4].
    How to get?
      Create a variable that stores the main array
        Push sub arrays into main array
      Create a variable that stores the sub arrays
        These sub arrays have items pushed into it dependent on lenth of array divided by size
      Create a variable that represents the new array count
  If the count is -1 then it returns nothing
  If the array is empty? Returns an empty array

3. Pseudocode.
  Define a function with the parameters of array and size.
  Create a condition statement that if size is less than 0 then returns the whole array
  Create a condition statement that if array is empty then return an empty array
  Create a condition statement that if size is more than 0 then code will run
  Create a variable that is an empty array
  Create a loop
    Initializes at 0
    Condition for the loop to go is if the initialization is less than the array.length
      If it is then push the value of the array at an index of array into the empty array
    Increment by 1
  Return the empty array.

4. Trace.
5. Code.
6. Trace.
*/

function chunk(array, size) {
  const count = array.length % size;
  const newArray = [];
  if (count === 0) {
    for (let i = 0; i < array.length / size; i++) {
      newArray.push([]);
      for (let j = 0; j < size; j++) {
        newArray[i].push(array[j]);
      }
    }
    return newArray;
  }

  // else if (count > 0) {

  // }
  // const count
  // else if
}
