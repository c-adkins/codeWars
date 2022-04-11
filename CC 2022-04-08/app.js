// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

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