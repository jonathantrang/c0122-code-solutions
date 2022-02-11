/* exported getKeys */
/*
1. Understand the prompt
  Returns an array that has the objects keys
  Input: (dave)
  Output: ['firstName', 'lastName']

2. Figure out how to reach output seperate from code
  How to return an array with object key names

3. Write down the list of steps necessary to replicate the process and test
  a.How to start ?
    - Create a system to execute when given an object
  b.Does this system need a storage ?
    - Yes, an empty array
  c.How to get values ?
    - A loop that looks in the object for the keys variable
    - This loop will push the keys property into the empty array
  d.How to exit ?
  - Return the result of the empty array

4. Translate the code
*/

function getKeys(object) {
  var keyValues = [];
  for (var keys in object) {
    keyValues.push(keys);
  }
  return keyValues;
}
