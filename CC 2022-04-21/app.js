// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
    let nums = x.split('')
    for (let i = 0; i <= nums.length; i++){
      if (nums[i] < 5){
        nums[i] = 0
      } else if (nums[i] >= 5) {
        nums[i] = 1
      }
    } return nums.join("")
  }