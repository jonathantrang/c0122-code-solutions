/* exported setValue */
/*
1. Understand the prompt
  Sets up a value for the key property of the object
  Does not need a return statement
  Input: (dave, 'lastName', 'Thomas')
  Output: For the Dave object {firstName: "David", lastName: "Thomas"}

2. Figure out how to reach output seperate from code
  How to set up a value for an object key?

3. Write down the list of steps necessary to replicate the process and test
  a.How to start ?
    - Create a system to execute when given an object, key, and value
  b.Does this system need a storage ?
    - No
  c.How to get values ?
    - The key property is assigned a value
f.How to exit ?
  - Does not need to

4. Translate the code
*/

function setValue(object, key, value) {
  object[key] = value;
}
