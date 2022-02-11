/* exported toObject */
/*
1. Understand the prompt
  Returns an object with array values
  Input: ['firstName', 'David']
  Output: { firstName: 'David' }

2. Figure out how to reach output seperate from code
  How to return an object when given an array?

3. Write down the list of steps necessary to replicate the process and test
  a.How to start ?
    - Create a system to execute when given an array
  b.Does this system need a storage ?
    - Yes, an empty object literal
  c.How to get values ?
    - Set an array with it's values in the empty object variable
    - Array consists of the arrays value at an index of 0
    - Set that equal to array value at index of 1
f.How to exit ?
  - Return the result of the empty array

4. Translate the code
*/

function toObject(keyValuePair) {
  var transformObject = {};
  transformObject[keyValuePair[0]] = keyValuePair[1];
  return transformObject;
}
