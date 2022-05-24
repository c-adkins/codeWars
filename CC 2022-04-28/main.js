// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// p array and value
// r  boolean if value is in array
// e,x,y and e -> true
// if a includes x true

function check(a, x) {
    if (a.includes(x)){
      return true
    } else {
      return false
    }
  }