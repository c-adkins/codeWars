
function getMiddle(s)
{
  let position, length
  
  if (s.length % 2 == 1) {
    position = s.length/2
    length = 1
  } else {
    position = s.length / 2-1
    length =2
  }
  
  return s.substring(position, position +length)
}

// P - string of unknown length
// R - middle character or the character to the left of the middle if even number of characters
// E - Carey -> r