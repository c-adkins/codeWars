function monkeyCount(n) {
    // your code here
      return [...Array(n).keys()].map(x => ++x)
    }