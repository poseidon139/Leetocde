//https://leetcode.com/problems/find-maximum-number-of-string-pairs/description/

var maximumNumberOfStringPairs = function(words) {
    let max_str=0;
    for (let i=0; i <words.length ; i++ ){
        let rev="";
        for (let j=words[i].length-1 ; j>=0 ; j--){
            rev+=words[i].charAt(j);
        }
        for (let k= i+1 ; k <words.length ; k++){
            if(words[k]==rev){
                max_str++;
            }
        }
    }
    return max_str;
};

console.log(maximumNumberOfStringPairs(["ab","ba","cc"]))