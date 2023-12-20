//https://leetcode.com/problems/unique-morse-code-words/description/
var uniqueMorseRepresentations = function(words) {
    let morse=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    let set= new Set();
    for(i of words){
        let morseWord="";
        for ( j of i ){
            morseWord+=morse[j.charCodeAt(0)-97];
        }
        set.add(morseWord)
    }
    return set.size;
};

console.log(uniqueMorseRepresentations(["gin","zen","gig","msg"]));