//https://leetcode.com/problems/check-if-the-sentence-is-pangram/description/


var checkIfPangram = function(sentence) {
    
    for (let i=97 ; i<(26+97) ; i++){
        let char=String.fromCharCode(i);
        if(!sentence.includes(char)){
            return false;
        }
    }
    return true;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));