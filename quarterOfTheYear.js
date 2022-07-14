// P - month as integer
// R - which quater of the year the month is in (1,2,3,4)
// E - month = 8 -> 3, month = 1 -> 1, month = 12 -> 4
// R - check if month is less than or equal to 3, 6, 9 for qters 1-3 else it is qtr 4


const quarterOf = (month) => {
    // Your code here
    if (month <= 3){
      return 1
    } else if (month <= 6){
      return 2
    } else if (month <= 9){
      return 3
    } else {
      return 4
    }
    
  }