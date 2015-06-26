function findMin(num1, num2) {
  if (num1 > num2) {
    return num2;
  } else {
    return num1;
  }
}

function isEven(number) {
  if (number === 0) {
    return true;
  } else if (number == 1) {
    return false;
  } else {
    return isEven(number - 2);
  }
}

function countBs(string, character) {
  var count = 0;
  for (var index = 0; index < string.length; index++) {
    if (string.charAt(index) == character) {
      count++;
    }
  }
  return count;
}

function range(start, end, step) {
  var numArray = [];
  step = step || 1;

  var compare = function() {
    if (step < 0) {
      return i >= end;
    } else {
      return i <= end;
    }
  };

  for (var i = start; compare(); i+=step) {
    numArray.push(i);
  }
  return numArray;
}

function sum(arr) {
  var total = 0;
  for (var i in arr) {
    total += arr[i];
  }
  return total;
}

function reverseArray(array) {
  var newArray = [];
  for (var index in array) {
    newArray.unshift(array[index]);
  }
  return newArray;
}

// using the splice method is cheating cuz it copies an array
function reverseArrayInPlace(array) {
  for (var index in array) {
    var num = array.pop();
    array.splice(index, 0, num);
    array.join();
  }
  return array;
}

// non-cheating function
function noCheatingReverseArrayInPlace(array) {
  for (var index = 0; index < Math.floor(array.length/2); index++) {
    var num = array[index];
    var endNum = array[(array.length - 1) - index]
    array[index] = array[(array.length - 1) - index];
    array[(array.length - 1) - index] = num;
  }
  return array;
}
