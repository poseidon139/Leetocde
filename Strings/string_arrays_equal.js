var arrayStringsAreEqual = function(word1, word2) {
       let str1="";
       let str2="";
       let l=(word1.length>word2.length)?word1.length:word2.length;
       for (let i=0; i<l ; i++){
            if ( i < word1.length){
                str1=str1+word1[i];
            }
            if ( i < word2.length){
                str2=str2+word2[i];
            } 
       }
       
       return str1==str2;
};

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]))
