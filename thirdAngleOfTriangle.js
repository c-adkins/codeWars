// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// p 2 integers for angles of triangle
// r integer for angle of 3rd
// e 45, 45 -> 90
// p subract angles from 180 and return remainder

function otherAngle(a, b) {
    return 180-a-b;
  }