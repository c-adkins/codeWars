// square every digit of a number and concatenate them.

function squareDigits(num){
    num = num.toString()
    num = num.split('')
    num = num.map(function(x) { return x*x;}) 
    num = num.join('')
    return Number(num)
  }

  // refactor to one line

  function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  }