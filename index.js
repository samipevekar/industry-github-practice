function add(a, b) {
  let num = a+b
  return num;
}

function isEven(num) {
  return num % 2 === 0;
}

function multiply(a, b) {
  return a * b;
}

module.exports = { add, isEven, multiply };
