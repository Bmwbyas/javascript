function howMuchWater(water, load, clothes){
    if (clothes>load*2){
      return "Too much clothes";
    } else if(clothes<load){
       return "Not enough clothes";
    } else{
      exp=clothes-load;
       num=water*Math.pow(1.1, exp);
      return parseFloat(num.toFixed(2));
    }
  
  }
  howMuchWater();