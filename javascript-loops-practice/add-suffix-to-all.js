/* exported addSuffixToAll */
/*
1. Understand the prompt
  Create a function that adds a given suffix with a given list of words
  input: ['equal', 'abnormal', 'civil'], 'ity'
  output: ['equality', 'abnormality', 'civility']

2. Figure out how to reach output seperate from code
  How to get an array with words and add another word to those words and make a new array?

3. Write down the list of steps necessary to replicate the process and test
  a. How to even start?
    - Create a system to do this
  b. Where to place the new values?
    - Create a storage that is an empty list
  c. How to add new values into the storage?
    - Create a system that repeats itself.
    - This system will spit out new values that will be stored in the empty list
  d. How does this repeatable system work?
    - Have the system start on the first number represented by the list
    - Make it so the system stops when it reaches the end of the list
    - The system keeps progressing until each item in the list is complete
  e. What does the system do when it repeats?
    - It will add the given word to the value the number the list is on
  f. How does the system end?
    - It exits out of the system with a result of what the storage with the empty list had stored

4. Translate to code */
function addSuffixToAll(words, suffix) {
  var suffixed = [];
  for (var i = 0; i < words.length; i++) {
    suffixed.push(words[i] + suffix);
  }
  return suffixed;
}
