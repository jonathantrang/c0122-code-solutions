/* exported isUpperCased */
/*
1. Understand the prompt
  Return a true or false statement if the given word is uppercased
  Input: 'LearningFuze'
  Output: False
  Input: 'HTML'
  Output: True

2. Figure out how to reach output seperate from code
  How to get get from LearningFuze -> False or HTML -> True

3. Write down the list of steps necessary to replicate the process and test
  a. How to start?
    - Create a system to execute when given any word
  b. Does this system need a storage?
    - Stores the new word
  c. How to get values?
    - System that repeats itself
    - Will check each letter
    - Checks to see if uppercase/lowercase
  d. How does the repeatable system work?
    - Contains a storage that reflects the first number of the list
    - Will keep repeating if the storage value is less that the length of the word
    - Will increment by 1 to get closer to the word length
  e. What happens when the system repeats?
    - Will keep checking if the letter is capitalized
    - If the letter is lowercase it will immediately go to false
  f. How to exit?
    - Return the result of what was stored

4. Translate the code
*/

function isUpperCased(word) {
  var result = true;
  for (var i = 0; i < word.length; i++) {
    if (word.charAt(i) !== word[i].toUpperCase()) {
      return false;
    }
  }
  return result;
}
