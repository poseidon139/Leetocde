var removeTrailingZeros = function(num) {
    let s="";
    let flag=0;
    for ( let i=num.length-1 ; i>=0 ; i--){
        if(Number.parseInt(num.charAt(i))==0 && flag !=1){
            s+=""
        }
        else{
            s=Number.parseInt(num.charAt(i))+s;
            flag=1;
        }
    }
    
    return s;
};

console.log(removeTrailingZeros("84726760000000"))