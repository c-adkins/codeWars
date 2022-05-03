function arrayPlusArray(arr1, arr2) {
  
    let arr1Sum= arr1.reduce((a, b)=> a+b, 0)
    let arr2Sum= arr2.reduce((a, b)=> a+b, 0)
    return arr1Sum + arr2Sum
  
  
  }