// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// P - array of numbers
// R - average of the numbers in the array
// E - 10, 20, 30 -> 30
// P - reduce by adding each number in the array together, divide sum by array length, return number

// This solution does not handle empty or undefined arays
function find_average(array) {
    let avg = array.reduce((a,b) => a + b) /array.length;
    return avg
  }

// Solution now handles undefined or empty arrays
function find_average(array) {
  // your code here
  if (array == null || array.length == 0){
    return 0;
  } else {
    let avg = array.reduce((a,b) => a + b) /array.length;
    return avg
  }
}