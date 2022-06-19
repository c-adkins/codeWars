// Description:
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Examples for output
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// P - list of intergers and strings
// R - list without the string characters
// E - ([1,2,'a','b']) == [1,2]
// P - filter list for x and x is type numbers


function filter_list(l) {
    // Return a new array with the strings filtered out
    const arrNums = l.filter( x => typeof x === 'number');
    return arrNums
  }