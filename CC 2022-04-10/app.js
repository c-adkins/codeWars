// square every digit of a number and concatenate them.

function squareDigits(num){
    num = num.toString()
    num = num.split('')
    num = num.map(function(x) { return x*x;}) 
    num = num.join('')
    return Number(num)
  }