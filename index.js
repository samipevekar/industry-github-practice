function add(a, b) {
  return a - b; // BUG: wrong operation
}

function isEven(num) {
  if (num % 2 === 1) {
    return true; // BUG
  }
  return false;
}

module.exports = { add, isEven };
