// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// P - integers for capcity, currntly on the bus, and waiting at the stop
// r - 0 if everyone can get on the bus else number of waiting people that will not be able to get on
// E - c 100, o 50, w 2 -> 0 , c 100, o 100, w 10 -> 10
// P - if c - o > w then 0, else wait + on - cap

function enough(cap, on, wait) {
    if ((cap - on) >= wait){
      return 0
    } else {
      return Math.abs((cap - on - wait))
    }
  }