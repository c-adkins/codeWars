// Write function bmi that calculates body mass index (bmi = weight / height2).

//P - weight and height as numbers
//R
// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"
// E - w = 180 h = 60 -> "Underweight"
// P - find bmi, check which categeory it falls under
function bmi(weight, height) {
    let bmiNum = weight / height**2;
    if (bmiNum <= 18.5){
      return 'Underweight'
    } else if (bmiNum <= 25){
      return 'Normal'
    } else if (bmiNum <= 30){
      return 'Overweight'
    } else if (bmiNum > 30){
      return 'Obese'
    }
  }