//https://leetcode.com/problems/lexicographically-smallest-palindrome/description/

var makeSmallestPalindrome = function(s) {
    index=0;
    let pallindrome=s.split("");
    let res="";
    for (let i=0; i < s.length ; i++){
        let index=0;
        if(s.charAt(i)!=s.charAt(s.length-i-1)  && i < s.length/2){
            index=(s.charCodeAt(i)<s.charCodeAt(s.length-i-1))?i:s.length-i-1
            if(index<s.length/2){
                pallindrome[s.length-i-1]=s.charAt(i);
            }
            else{
                pallindrome[i]=s.charAt(s.length-i-1);
            }
        }
        
    }
    for (i of pallindrome){
        res+=i;
    }
    return res
};

console.log(makeSmallestPalindrome("abcd"))