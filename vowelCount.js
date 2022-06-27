// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// p string
// r count of vowels in the string, can count each occurence of a vowel but not y
// e Apple -> 2, yooooo -> 5
// p  for each letter of the string if it is in an array of vowels +1 to count of vowels
function getCount(str) {
    let vowelsCount = 0;
    let vowels = ['a','e','i','o','u']
    for (let i of str) {
     if (vowels.includes(i)) {
       vowelsCount += 1;
     } else {
       vowelsCount +=0
     } 
  } return vowelsCount
  
  }