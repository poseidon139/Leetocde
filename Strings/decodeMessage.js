//https://leetcode.com/problems/decode-the-message/description/
//Not Optimised

var decodeMessage = function(key, message) {
    let keyNew="";
    let decodedString="";
    for (i of key){
        if (i==' '|| keyNew.includes(i)){
            continue;
        }
        else{
            keyNew+=i
        }
    }
    
    const mapalpha= new Map();
    let n_a="a".charCodeAt(0);
    for(let i =1 ; i <=26 ; i++){
        mapalpha.set(i,String.fromCharCode(n_a));
        ++n_a;
    }
    for ( i of message){
        if (i==" "){
            decodedString+=" ";
        }
        else{
            for (let j=0 ; j < keyNew.length ; j++){
                if (i==keyNew.charAt(j)){
                    decodedString+=mapalpha.get(j+1);
                    
                }
            }
        }
    }
    return decodedString;
   
};
console.log(decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv"))