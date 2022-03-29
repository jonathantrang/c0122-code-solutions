/* exported omit */
/*
1. Understand
  Given two parameters (source an object, keys an array of strings)
  Return a new object containing the properties of source that is not listed in keys
2. Clarify
  Removes object properties that match with the given key
  If keys don't match with object then return the whole object
  If object is empty then return an empty object
3. Pseudocode
  Define a function with parameters source and keys
  Have a variable that stores the new object containing source parameter not listed in keys parameter
  Create a loop
    Set an initial variable at 0
    Conditional set where if initial variable is less than the string length then runs conditional code block
      Create an if statmement that checks to see if
    Increment the initial variable by 1
  Checks to see if

4. Trace
5. Code
6. Trace
*/

const omit = (source, keys) => {
  const newObj = {};
  for (let i = 0; i < keys.length; i++) {
    if (source[keys[i]] === keys[i] in source) {
      newObj[keys[i]] = source[keys[i]];
    }
  }
  return newObj;
}
