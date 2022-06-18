// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

// can be one line solution

// P - integers
// R - boolean
// E - 2, 2, 5 -> false, 10, 2, 5 -> true
// P - if n % x and % y = 0 then true else false
function isDivisible(n, x, y) {
    let ans = false;
    if (n % x === 0 && n % y === 0) {
      ans = true;
    }
    return ans;
  }