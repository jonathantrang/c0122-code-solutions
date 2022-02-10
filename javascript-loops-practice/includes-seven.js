/* exported includesSeven */
function includesSeven(array) {
  var hasSeven = true;
  for (var i = 0; i <= array.length; i++) {
    if (array[i] === 7) {
      return hasSeven;
    }
  }
  return false;
}
