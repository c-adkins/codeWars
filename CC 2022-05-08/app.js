function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let classSum = classPoints.reduce((sumNum,n) => sumNum + n, 0)
    let classAverage = classSum / classPoints.length
    
    if (yourPoints > classAverage){
      return true
    } else {
      return false
    }
  }