/* exported defaults */
/*
1. Understand
  Given two parameters, target a JavaScript object and source a JavaScript object
  Do not return anything but have the target object be modiefied
2. Clarify
  There is no returning value
  The target object is getting modified
  Any properties in the source object will be in the target object
    If the target object already has a key with the same name then it's value stays the same
  If source object is empty then target object doesn't change.
3. Pseudocode
  Define a function with two parameters, target and source
  Create a for...in loop that goes through the keys in the source object
    If the property of the source object is not in the target object
      Have the key of the source object be assigned as a key to the target object
4. Trace
5. Code
6. Trace
*/

const defaults = (target, source) => {
  for (const key in source) {
    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }
};
