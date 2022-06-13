// create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

// P - integer number
// R - boolean
// E - 6, 2, 3 -> true. 5, 2, 5 -> false
// P - check if remainder for number /a = 0 and if number / b = 0.
function isDivideBy(number, a, b) {
    if ((number % a === 0) && (number % b === 0)){
        return true
       } else {
         return false
       }
  }

  // one line solution
  const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;