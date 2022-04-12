function sum(a, b) {

  if ((a === undefined) || (b === undefined)) {
    return 0;
  }

  let sumVar = a + b;
  return sumVar;
}

function subtract(a, b) {
  return;
}

function divide(a, b) {
  return;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
