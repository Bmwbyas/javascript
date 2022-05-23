const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return mpg * fuelLeft >= distanceToPump
    if (zeroFuel>1){
      return true
      } else{
        return false
      }
  };