/* exported getStudentNames */
/*
1. Understand the prompt
  Create a function that creates an array of names thats pulled from the array of objects
  input: students = [{name: 'Shrek'}, {name: 'Donkey'}, {name: 'Fiona'}]
  output: ['Shrek', 'Donkey', 'Fiona']

2. Figure out how to reach output seperate from code
  How to get from an array of objects -> array

3. Write down the list of the steps necessary to replicate the process and test
  a. How to even start?
    - Create a system to execute this task
  b. Where to store new value?
    - A storage that is an empty list
  c. How to get new values?
    - Create a system that repeats itself
    - This system will spit out out the names from the list
  d. How does this repeatable system work?
    - Contains a storage that reflects the beginning of the list
    - Will keep repeating itself until the end of the array
    - System will keep repeating until the value of the storage is more than the length of the list
  e. What does the system do when it repeats?
    - Will spit out names of the students starting from the beginning of the list
    - These values will then be placed in the storage with an empty list
  f. How does the system end?
    - Exits out of the system with the result of the values stored in the empty list
4. Translate to code */

function getStudentNames(students) {
  var names = [];
  for (var i = 0; i < students.length; i++) {
    names.push(students[i].name);
  }
  return names;
}
