// Build a function that returns an array of integers from n to 1 where n > 0

// p - starting point n
// r - array of integerers from n to 1
// e - 
// p - Array from n to 1 and reverse the array
const reverseSeq = n => {
    let arr = Array.from({length:n}, (x,i) => i + 1);
    arr = arr.reverse()
    return arr
                        
  };