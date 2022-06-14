// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array

// P - number to stop at and number to count by
// R - an array of each step from 0 to x counting by n
// E - 25, 5 -> [5,10,15,20,25]
function countBy(x, n) {
    let z = [];
    for (let step = x; step <= n*x ; step+= x){
      z.push(step)
    }
    
    return z;
  }