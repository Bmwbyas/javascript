function nameShuffler(str){
    const fullName = str.split(" ");
    return [fullName[1], fullName[0]].join(" ");
  }