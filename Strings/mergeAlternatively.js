var mergeAlternately = function(word1, word2) {
    let res='';
    
    if (word1.length >= word2.length){
        for (let i=0 ; i< word2.length ; i++){
            console.log(word1.charAt(i))
            res+=word1.charAt(i)+word2.charAt(i);
            console.log(res)
        }
        res+=word1.slice(word2.length,word1.length)
    }
    else{
        for (let i=0 ; i< word1.length ; i++){
            console.log(word1.charAt(i))
            res+=word1.charAt(i)+word2.charAt(i);
            console.log(res)
        }
        res+=word2.slice(word1.length,word2.length)
    }
    return res;
    
    
};

console.log(mergeAlternately( "ab", "pqrs"))