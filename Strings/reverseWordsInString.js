//https://leetcode.com/problems/reverse-words-in-a-string-iii/description/

var reverseWords = function(s) {
    let words=s.split(' ');
    let res='';
    for (i of words){
        let rev="";
        let wordsarr=i.split('');
        for (let j=i.length-1 ; j >=0 ; j-- ){
            rev+=wordsarr[j];
        }
        res+=rev+' ';
    }
    return res.trim();
};

console.log(reverseWords("Let's take LeetCode contest"))