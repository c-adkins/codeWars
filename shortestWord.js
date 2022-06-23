
// given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// p string of words
// r length of shortest word
// e hi there -> 2
// p split string into array of words, take first word compare to second if shortest compare to next word until shortest word is left, return length

function findShort(s){
    let words = s.split(' ')
    let shortest = words.reduce((shortestWord, currentWord) => {
      return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, words[0])
    return shortest.length
  }