/* exported pick */
/*
1. Understand
  Given two parameters: source and keys, return a new object that has all the properties of source listed in keys
2. Clarify
  What happens if there is a key but it doesnt belong to a source?
    The key gets ignored
3. Pseudocode
  Define a function with parameters source and keys
  Create a new variable that is an empty object.
  Create a loop
    Initialized with starting value of 0
    If initialized value is less than the lenghth of keys then loop runs
      Create a conditional statement
        Checks to see if the keys value at i from the source is not equal to undefined and the index at keys in the source object
          If it is then the index of the keys value from the source property will be assigned to the new object
    The loop keeps incrementing by 1
    Return the new object variable
4. Trace
5. Code
6. Trace
*/

function pick(source, keys) {
  const newObj = {};
  for (let i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined && keys[i] in source) {
      newObj[keys[i]] = source[keys[i]];
    }
  }
  return newObj;
}
