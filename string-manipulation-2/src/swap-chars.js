/* exported swapChars */
/*
1. Understand
  Given three parameters (firstIndex, secondIndex, and string) return the same string but firstindex and secondindex are swapped
  firstIndex is a number
  secondIndex is a number
2. Clarify
  Will the given numbers ever be bigger that the string itself?
  Use slice method to create a copy of array from one index to another

3. Pseudocode
  Create a function with three parameters (firstIndex, secondIndex, and string)
  Create a conditional to see if the first index and second index are the same
    If they are then return the same string
  Create a storage that is an empty string
  Create a storage for the first index of the string
  Create a storage for the second index of the string
  Create a storage that slices the string starting at 0 to the firstIndex parameter
  Create a storage that slices the string from the firstIndex parameter + 1 to the secondIndex parameter
  Create a storage that slices the string from the secondIndex parameter + 1 to the length of the string
  Reassign the empty string to:
    Itself concantenated with the first slice of the string
    Concantenated with the second index of the string
    Concantenated with the second slice of the string
    Concantenated with the first index of the string
    Concatenated with the third slice of the string
  Return the new string

4. Trace
5. Code
6. Trace

*/
function swapChars(firstIndex, secondIndex, string) {
  if (firstIndex === secondIndex) {
    return string;
  } else
    var newString = '';
    var firstChar = string[firstIndex];
    var secondChar = string[secondIndex];
    var firstSlice = string.slice(0, firstIndex);
    var secondSlice = string.slice((firstIndex + 1), secondIndex);
    var thirdSlice = string.slice((secondIndex + 1), string.length);
    newString += firstSlice + secondChar + secondSlice + firstChar + thirdSlice;
    return newString;
}
