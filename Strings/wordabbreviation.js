//https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/description/

var isAcronym = function(words, s) {
    if (s.length!=words.length){
        return false
    }
    let index=0
    for ( let i of s){
        if (i!=words[index].charAt(0)){
            return false;
        }
        ++index
    }
    
     return true
};

console.log(isAcronym(["alice","bob","charlie"],"abc"))