/* exported capitalizeWords */
/*
  1. Understand
    Given a value of a string which contains multiple words return a string with the first letter of the word capitalized.

  2. Clarify
    What if the words have commas?
    What if words have capitalization that isnt on the right character?
    How to get the first letter of first word capitalized?
      Uppercase the first index of the string
    How to get first letter capitalized if there's more than one word?
      Use the split method

  3. Pseudocode
    Create a function that uses one parameter called string
    Create a variable that makes the string all lowercase
    Create a variable that splits the string with multiple words
    Create a variable that's an empty string
    Create a for loop
      Create a variable that stores the single word of the list of words
      Creates a variable that makes the first letter capitalized
      This is then concantenated into the empty string

  4. Code
*/

function capitalizeWords(string) {
  var lowerCaseWords = string.toLowerCase();
  var listOfWords = lowerCaseWords.split(' ');
  var words = '';
  for (var i = 0; i < listOfWords.length; i++) {
    var word = listOfWords[i];
    var firstLetter = word[0].toUpperCase();
    var otherLetters = word.slice(1, word.length);
    word = firstLetter + otherLetters + ' ';
    words += word;
  }
  return words;
}
