/* exported ransomCase */
/*
  1. Understand the prompt
    Given a string value make every other character capitalized

  2. Clarify the prompt
    How to make every other character capitalized?
      Make a loop that goes through the whole length of the word.
    What if letter is capitalized at the spot that needs to be capitalized?
      Leave as is.

  3. Pseudocode
    Create a function that takes a parameter of a string
    Create a variable that stores the new word
    Create a loop that goes through the string's length
    If the character index is divisble by 2 then make the character lowercase
    Otherwise make the character uppercase
    First character is always lowercase

  4. Code
*/

function ransomCase(string) {
  var ransomWord = '';
  for (var i = 0; i < string.length; i++) {
    if (i === 0) {
      var firstLetter = string[i].toLowerCase();
      ransomWord += firstLetter;
    } else if (i % 2 !== 0) {
      var upperCaseLetter = string[i].toUpperCase();
      ransomWord += upperCaseLetter;
    } else {
      var lowerCaseLetter = string[i].toLowerCase();
      ransomWord += lowerCaseLetter;
    }
  }
  return ransomWord;
}
