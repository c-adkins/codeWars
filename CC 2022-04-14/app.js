// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Did not pass. Count of positive is counting all loops instead of all ints > than 0
function countPositivesSumNegatives(input) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < input.length; i++){
      if (input[i] < 0){
        sum += input[i]
      } else {
        count += 1
      }
    }return [count,sum]
}

// second attempt passed. Now it is counting only ints > 0 but it has errors if the array is null
function countPositivesSumNegatives(input) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < input.length; i++){
      if (input[i] < 0){
        sum += input[i]
      } else if(input[i] > 0) {
        count += 1
      }
    }return [count,sum]
}

// this solution first checks if the input array is an array, or if the length is 0. If either is true it returns an empty array. Else it continues to count postives and sum negatives. 

function countPositivesSumNegatives(input) {
    let sum = 0;
    let count = 0;
    if (!Array.isArray(input) || !input.length) {
      return []
    } else{
        if (input.length > 0) {
            for (let i = 0; i < input.length; i++){
              if (input[i] < 0){
                sum += input[i]
              } else if(input[i] > 0) {
                count += 1
              } 
            }return [count,sum]
}
}
}