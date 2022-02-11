/* exported reverseWord */
/*
1. Understand the prompt
  Return a true or false statement if the given word is lowercased
  Input: 'foo'
  Output: 'oof'
  Input: 'rab'
  Output: 'bar'

2. Figure out how to reach output seperate from code
  How to get get from foo -> oof or rab -> bar

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
    - Contains a storage that reflects the last letter of the word
    - Will keep repeating if the storage value is less that the length of the word
    - Will increment by 1 to get closer to the word length
  e. What happens when the system repeats?
    - Will keep pushing the letter into storage
  f. How to exit?
    - Return the result of what was stored

4. Translate the code
*/

function reverseWord(word) {
  var reversedWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return reversedWord;
}
