// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

// P - integer for bullets and dragons
// R - boolean
// E - 2, 1 -> true, 4, 3 -> false
// P - if bullets < dragons * 2 false, else true
function hero(bullets, dragons){
    if (bullets < dragons * 2) {
      return false
    } else {
      return true
    }}