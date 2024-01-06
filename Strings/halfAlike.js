//https://leetcode.com/problems/determine-if-string-halves-are-alike/description/

var halvesAreAlike = function(s) {
    let str=s.split("");
    let count_l=0;
    let count_r=0;
    let res=false;
    let vowels=['a','e','i','o','u','A','E','I','O','U'];
    for (let i =0 ; i < str.length ; i++){
        for (let j =0 ; j < vowels.length ; j++ ){
            if (i < str.length/2 && str[i]==vowels[j]){
                count_l++;
            }
            if (i >= str.length/2 && str[i]==vowels[j]){
                count_r++;
            }
        }
    }
    if ( count_l == count_r){
        res=true
    }
    return res;
};

console.log(halvesAreAlike("book"))