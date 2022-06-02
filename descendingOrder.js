
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.


function descendingOrder(n){
    //convert integer to string
    let str = n.toString()
    //split string into individual elements, sort the elements highest to lowest, join back to a string
    return +str.split('').sort((a,b)=>b-a).join('')
  }