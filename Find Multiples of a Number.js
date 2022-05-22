function findMultiples(int,limit){
    let arr = [];
    for(let i = 1  ; limit >= i * int; i++ ){
      arr.push(i * int);
    }
    return arr;
  }