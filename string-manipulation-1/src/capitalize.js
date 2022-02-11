/* exported capitalize */
/*
1. Understand the prompt
  Get the first character of a given string
  Input: a
  Output: "A"

2. Figure out how to reach output seperate from code
  How to get get from a -> A?
  What if it's pAsT -> Past?

3. Write down the list of steps necessary to replicate the process and test
  a. How to start?
    - Create a system to execute when given any word
  b. Does this system need a storage?
    - Stores the new word
  c. How to get values?
    - System that repeats itself
    - Will check each letter
    - The first letter will be uppercased
    - THe following letters will be lowercased
  d. How does the repeatable system work?
    - Contains a storage that reflects the first number of the list
    - Will keep repeating if the storage value is less that the length of the word
    - Will increment by 1 to get closer to the word length
  e. What happens when the system repeats?
    - Will either uppercase or lowercase the letter
  f. How to exit?
    - Return the result of what was stored

4. Translate the code
*/

function capitalize(word) {
  var capitalWord = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      capitalWord += (word[i].toUpperCase());
    } else capitalWord += (word[i].toLowerCase());
  }
  return capitalWord;
}
