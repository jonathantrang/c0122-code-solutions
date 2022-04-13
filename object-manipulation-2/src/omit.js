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
  Create a storage variable that is an empty object literal
  Create a loop that checks the key in the source object
    Assign the result of the key in the source object to the empty storage variable's properties
  Create a loop that goes through the keys array
    Have the initial value start at 0
    Have the loop check to see if the initial value is less that the length of the keys array
      If it is then check to see if the item in the keys array shows up in the source object
        If it does then delete the item in the keys array in the new object storage
    Have the initial value increment by 1
  Return the new object literal
4. Trace
5. Code
6. Trace
*/

const omit = (source, keys) => {
  const newObject = {};
  for (const key in source) {
    newObject[key] = source[key];
  }
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] in source) {
      delete newObject[keys[i]];
    }
  }
  return newObject;
};
