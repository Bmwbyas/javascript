function between(a, b) {
    let arr=[];
    if (a<=0){
    for(i=0; i<=b-a; i++){
      if (a<0){
      arr[i]=a+i;
      }else{
        arr[i]=i;
      }
    }} else{
      for(i=0; i<=b-a; i++){
        arr[i]=i+a;
    }
  
    }
    return arr;
  }
   between();