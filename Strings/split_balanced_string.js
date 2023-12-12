var balancedStringSplit = function(s) {
    let count_r=0
    let count_l=0;
    let res=0;
    for (i of s){
      if (i == 'R'){
          ++count_r
      }
      else {
          ++count_l
      }
      if ( count_r==count_l){
          count_r=0;
          count_l=0;
          ++res;
      }
    }  
    return res;
};

console.log(balancedStringSplit("LLLLRRRR"))