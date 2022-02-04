/* exported countdown */
function countdown(number) {
  var numbers = [];
  for (var i = number; i >= 0; i -= 1) {
    numbers.push(i);
  }
  return numbers;
}

/*
1. Understand the prompt
  A function that creates a countdown dependent on the number given
  input: 10 <- number
  output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0] <- array

2. Figure out how to reach output seperate from code
  How to get 10 to countdown from 10 -> 0?

3. Write down the list of steps necessary to replicate the process and test
  a. How to even start?
    - Create a system to do this
  b. How to get a list?
    - Create a storage that is an empty list
  c. How to get values into the list?
    - Create a way that repeats itself and pushes values into the list
      1. How to create a way to repeat itself and push values?
        - Set up a starting point (a storage that is equal to the given number but can be altered)
        - Set up a stopping point (when the storage is at 0 it will stop)
        - Set up a way to progress (have the storage from the starting point increment itself downwards)
        1a. What happens when it repeats itself?
          - Set up a way where the given number is stored into the storage for the empty list
  d. How to end the system?
    - Have a way to exit the system and gives the necessary result

4. Translate to code
  function countdown(number) {
    var numberCount = [];
    for (var i = number; i >= 0; i -= 1) {
      numberCount.push(i);
    }
  return numberCount;
  }

*/
