function countPositivesSumNegatives(input) {
    for (i=0; i<=input.length; i++) {
    let positiveNubmer=0;
    let negativeNumber=0;
        if (input[i]>0){
            positiveNubmer+=1;
        }else if (input[i]<0){
            negativeNumber+=input[i]
        }
   
    }
    console.log(positiveNubmer);
    console.log(negativeNumber);
}
