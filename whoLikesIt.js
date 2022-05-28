function likes(names) {
    if (names.length === 0) {
      return 'no one likes this';
    } else if (names.length === 1) {
      return `${names[0]} likes this`;
    } else if (names.length === 2) {
      return `${names[0]} and ${names[1]} like this`;
    } else if (names.length === 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else if (names.length > 3) {
      return `${names[0]}, ${names[1]} and ${names.length - 2} other like this`;
  }}

  // add instructions and test case

  // p arrary of names can be empty
  // r - string of name likes this for each name that is in the array or no one likes this if empty
  // e tom, sarah -> tom and sarah like this
  // p - index of names to return string