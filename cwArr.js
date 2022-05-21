function countPositivesSumNegatives(input) {
    if (input === null || input.length < 1) {
          return [];
      }
    let positiveNubmer=0;
    let negativeNumber=0;
    let arr=[];
    for (i=0; i<=input.length; i++) {
    
        if (input[i]>0){
            positiveNubmer+=1;
            
        }else if (input[i]<0){
            negativeNumber+=input[i];
        }
        
    
    }
      
      arr[0]=positiveNubmer;
      arr[1]=negativeNumber;  
      
    
    
    return arr;
  }