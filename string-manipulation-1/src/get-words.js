/* exported getWords */
/*
1. Understand the prompt
  Return a list of strings if input has spaces in between words
  Input: LearningFuze
  Ouput: [LearningFuze]
  Input: Web Development
  Output: [Web, Development]

2. Figure out how to reach output seperate from code
  How to get get from Web Development -> [Web, Development]

3. Write down the list of steps necessary to replicate the process and test
  a. How to start?
    - Create a system to execute when given any character
  b. Does this system need a storage?
    - Stores a list of strings
  c. How to get values?
    - System that checks the string input
    - If there is a space between the words then they will become a unique word in the list
  d. The system will return the list of words that were split

4. Translate the code
*/

function getWords(string) {
  var splitWords = string.split(' ');
  if (string === '') {
    return [];
  }
  return splitWords;
}
