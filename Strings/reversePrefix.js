//https://leetcode.com/problems/reverse-prefix-of-word/description/

var reversePrefix = function(word, ch) {
    let index=-1;
    let rev="";
    for (let i =0 ; i < word.length ; i++){
        if (word.charAt(i)==ch){
            index=i;
            break;
        }
    }
    for ( let i = index ; i>=0 ; i-- ){
        rev+=word.charAt(i);
    }
    for (let i=index+1; i<word.length ; i++){
        rev+=word.charAt(i);
    }
    return rev;
};

console.log(reversePrefix("abcdefd","d"));