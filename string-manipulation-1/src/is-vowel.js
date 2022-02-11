/* exported isVowel */
/*
1. Understand the prompt
  Return true if a vowel (regardless of case)
  Input: a or A
  Ouput: True
  Input: b or B
  Output: False

2. Figure out how to reach output seperate from code
  How to get get from a -> true or B -> false

3. Write down the list of steps necessary to replicate the process and test
  a. How to start?
    - Create a system to execute when given any character
  b. Does this system need a storage?
    - Stores a list of vowels
  c. How to get values?
    - System that repeats itself
    - Will check each letter
    - Checks to see if the letter is a vowel or not
  d. How does the repeatable system work?
    - Contains a storage that reflects the first number of the list
    - Will keep repeating if the storage value is less that the length of the word
    - Will increment by 1 to get closer to the word length
  e. What happens when the system repeats?
    - Will keep checking if the letter is a vowel
    - If the letter is a vowel will return true
    - In the case for uppercase vowels (these will be turned into lowercase)
  f. How to exit?
    - Return false if conditional statement is not met

4. Translate the code
*/

function isVowel(char) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
  for (var i = 0; i < vowels.length; i++) {
    if (vowels[i] === char.toLowerCase())
      return true;
  }
  return false;
}
