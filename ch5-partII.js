function every (array, predicate) {
  for (var i=0; i < array.length; i++) {
    if (!(predicate(array[i]))) {
      return false;
     }
  }
}

function some (array, predicate) {
  for (var i=0; i < array.length; i++) {
    if (predicate(array[i])) {
      return true;
    }
  }
}
