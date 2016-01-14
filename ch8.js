// Say you have a function primitiveMultiply that, in 50 percent of cases, multiplies two numbers and, in the other 50 percent,
// raises an exception of type MultiplicatorUnitFailure. Write a function that wraps this clunky function and just
// keeps trying until a call succeeds and returns the result.
// Make sure you handle only the exceptions you are trying to handle.

function MultiplicatorUnitFailure() {}

function primitiveMultiply(num1, num2) {
  if (Math.random() >= .5) {
    return num1 * num2;
  } else {
    throw new MultiplicatorUnitFailure();
  }
}

(function tryTryAgain(num1, num2) {
  try {
    console.log(primitiveMultiply(num1, num2));
  } catch(e) {
    primitiveMultiply(num1, num2);
  }
})(2, 3);
