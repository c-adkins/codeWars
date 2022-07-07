function greet (name, owner) {
    if (name === owner){
      return "Hello boss"
    } else {
      return "Hello guest"
    }
  }

  // P - string for name and string for owner
  // R - string of Hello boss if owner = name or string Hello guest otherwise. Hello is capital. inputs are returned as they are.
  // E - bob, bob -> Hello boss, bob, gary -> Hello guest
  // P - if name = owner return Hello Boss, esle return Hello guest