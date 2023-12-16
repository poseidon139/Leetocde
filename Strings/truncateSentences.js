//https://leetcode.com/problems/truncate-sentence/description/


var truncateSentence = function(s, k) {
    let res="";
    let words=s.split(' ');
    for (i =0; i < k ; i++){
        res+=words[i]+" ";
    }
    return res.trim();
   };

console.log(truncateSentence("Hello how are you Contestant",4))