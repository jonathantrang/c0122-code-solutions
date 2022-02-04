/* exported getIndexes */

/*
1. Understand the prompt
  A function that translates an array into an array with its respective indexes
  Input: ['meow', 'woof', 'squeak', 'shazoo']
  Output: [0, 1, 2, 3]

2. Figure out how to reach output separate from the code
  How to get a list of values to equal a list of indexes?

3. Write down the list of steps necessary to replicate the process and test
  a. How to begin?
    - Create a system to do this for any kind of list
  b. How to store these new values?
    - Create a new storage that is empty
    - This will store the new values
  c. How to get these new values?
    - Create a way that repeats itself and extracts new values
    1. What will this system contain?
      - Starts with a storage that reflects the beginning value of the list
      - This system keeps repeating itself so long as the initial value is less than or equal to the lists length
      - This system is able to progress by incrementing itself by 1
    2. What happens when the system starts?
      - It's initial value is stored in the empty storage that was made
  d. How does this system end?
    - It exits out of the system with the end result of the storage that was empty

4. Translate to code */

function getIndexes(array) {
  var indexes = [];
  for (var i = 0; i < array.length; i++) {
    indexes.push(i);
  }
  return indexes;
}
