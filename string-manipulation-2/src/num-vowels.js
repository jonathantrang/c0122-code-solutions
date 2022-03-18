/* exported numVowels */
/*
  1. Understand
    Given a parameter that's a value of a string return a number with the amount of vowels in the string

  2. Clarify
    What is a vowel?
      A, E, I, O, U, a, e, i, o, u
    How to get the vowel?
      if charAt === vowel
    How to get if there are several words in the string?
      Split method which separates the words and puts it into an array
    How to get a number from a string?
      Make an array, push the vowels into the array, use length property

  3. Pseudocode
    Create a function which has the parameter of string
    Have a variable that stores zero
    Create a loop that checks each word in the string
      Have a variable that stores the index of a word and make it lower case
      If any of the characters in the words are vowels then increment the zero variable by 1
    Return the number variable

  4. Trace

  5. Code

  6. Trace

*/

function numVowels(string) {
  var numOfVowels = 0;
  for (var i = 0; i < string.length; i++) {
    var letter = string[i].toLowerCase();
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
      numOfVowels += 1;
    }
  }
  return numOfVowels;
}
