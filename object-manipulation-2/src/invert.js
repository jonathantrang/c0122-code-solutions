/* exported invert */
/*
1. Understand
  Given a parameter named source that is JavaScript object
  Return a new object that has all the properties of source but the keys and values are inverted
2. Clarify
  If object is empty then return an empty object
3. Pseudocode
  Define a function with parameters source
  Create a storage variable that contains an empty object literal
  Create a loop that checks the properties of the source object
    Assign the properties into the new object literal with the keys being the values of the source's keys
  Return the new object variable.
4. Trace
5. Code
6. Trace
*/

const invert = source => {
  const newObject = {};
  for (const key in source) {
    newObject[source[key]] = key;
  }
  return newObject;
};
