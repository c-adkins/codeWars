// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

// can be one line solution
function isDivisible(n, x, y) {
    let ans = false;
    if (n % x === 0 && n % y === 0) {
      ans = true;
    }
    return ans;
  }