var firstPalindrome = function(words) {
    let res="";
    for ( i of words){
        let flag=0;
        for (let j =0 ; j<=i.length/2 ; j++ ){
            if(i.charAt(j)!=i.charAt(i.length-j)){
                flag=1;
            }
        }
        if (flag==0){
            res=i;
            break;
        }
    }
    return res;
};

console.log(firstPalindrome(["abc","car","ada","racecar","cool"]))