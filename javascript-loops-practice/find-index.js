/* exported findIndex */
function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return array.indexOf(i);
    } else return -1;
  }
}
