/* exported take */
/*
1. Understand.
  Given parameters array and count return a new array with the only that amount from count in it

2. Clarify.
  If array is [1, 2, 3, 4] and the count is 1 then returns 1.
  If the count is -1 then it returns the full amount of the array.
  If the array is empty? Returns an empty array.

3. Pseudocode.
  Define a function with the parameters of array and count.
  Create a condition statement that if count is more than 0 then code will run
  Create a loop
  Create a variable that is an empty array
    Initializes at 0
    Condition for the loop to go is if the initialization is less than the count
      If it is then push the value of the array at an index of the initialization
    Increment by 1
  Return the empty array.

4. Trace.
5. Code.
6. Trace.
*/

function take(array, count) {
  var newArray = [];
  if (array.length > count) {
    for (var i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
