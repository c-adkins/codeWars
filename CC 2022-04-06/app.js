// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// P - number of classmates and number of pages
// R - 0 if n or m is less than 0 else n*m
// E - 0, 3 -> 0
// P - check if n or m is less than 0, if not then return n*m
function paperwork(n, m) {
    if (n < 0 || m < 0){
      return 0
    } else {
      return n*m
    }
  }