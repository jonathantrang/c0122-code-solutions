/* exported chunk */
/*
1. Understand.
  Given parameters array and size return an array containing subarrays.
  The subarrays length is equal to the given size parameter.

2. Clarify.
  If array is [1, 2, 3, 4] and the count is 2 then returns [1, 2].
  If the count is -1 then it returns nothing
  If the array is empty? Returns an empty array.
  How to get [1, 2, 3, 4] if array is [1, 2, 3, 4, 5] with count of 1
    array lenghth - count

3. Pseudocode.
  Define a function with the parameters of array and count.
  Create a condition statement that if count is less than 0 then return an empty array
  Create a condition statement that if count is more than 0 then code will run
  Create a variable that is an empty array
  Create a loop
    Initializes at 0
    Condition for the loop to go is if the initialization is less than the array.length - count
      If it is then push the value of the array at an index of array into the empty array
    Increment by 1
  Return the empty array.

4. Trace.
5. Code.
6. Trace.
*/
