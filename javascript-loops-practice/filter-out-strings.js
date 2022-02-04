/* exported filterOutStrings */
/*
1. Understand the prompt
  Create a function that creates an array of values that doesn't include strings
  input: values = [1, 'a', 'b', 2, 3, 'c']
  output: [1, 2, 3]

2. Figure out how to reach output seperate from code
  How to get from an array without strings?
  How to remove string values?

3. Write down the list of steps necessary to replicate the process and test
  a. How to even start?
    - Create a system to execute the task
  b. Does this system need storage?
    - An empty storage to include the new values
  c. How to get new values?
    - A system that repeats itself
    - Will check each value from the list
    - If the value is a word then it will not be included in the storage
    - If the value is a value then it will be put into storage
  d. How does this repeatable system work?
    - Contains a storage that reflects the first number of the list
    - Will keep repeating if the storage value is less than the list length
    - Will increment by 1 to get closer to being more than the list length
  e. What happens when the system repeats
    - Checks to see if value is a word
    - If it isn't the value will be placed into the storage with the empty list
    - If it is then it will be ignored
  f. How does the system end?
    - Exits out with the result from the empty list storage
4. Translate to code*/

function filterOutStrings(values) {
  var notString = [];
  var shadowRealm = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof(values[i]) === "string") {
      shadowRealm.push(values[i]);
    } else notString.push(values[i]);
  }
  return notString;
}
