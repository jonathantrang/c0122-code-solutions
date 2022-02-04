/* exported sumAll */
function sumAll(numbers) {
  var sumOfNumbers = 0;
  for (var i = 0; i < numbers.length; i++) {
    sumOfNumbers = sumOfNumbers + numbers[i];
  }
  return sumOfNumbers;
}

/*
1. Understand the prompt
  - function to get the sum of all the numbers from a list
  - Input: [1200, 1, 0] <- an array
  - Output: 1201 <- a number

2. Figure out how to reach output, SEPERATE FROM CODE
  - How to turn [1200, 1, 0] -> 1200 + 1 + 0 -> 1201

3. Write down the list of steps necessary to replicate the process and test
    - Where to hold the sum of the numbers?
      - Create a storage for the numbers being added, this will be empty since there's nothing being added yet <- a variable for the sum
    - How to get the numbers to add with each other?
      - A way that repeats itself until each number in the list has been added <- a loop
        - Create a storage to start at the first number <- a variable for the index[0]
        - Create a way so the system knows when to stop repeating <- stops at the last number of the list, length of the array
        - Create a way to progress <- increment by 1
        - Have the storage that stores the sum add itself with the next number on the list <- sum + number from the index
  - A way to end the system and displays the sum <- return statement

4. Translate code
  function sumAll(numbers) {
    var sumOfNumbers = numbers;
    for (var i = 0; i < numbers.length; i++) {
      sumOfNumbers = sumOfNumbers + numbers[i];
    }
  return sumOfNumbers;
  }
*/
