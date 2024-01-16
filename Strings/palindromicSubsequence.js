//

var removePalindromeSub = function(s) {
    let revTemp="";
    let count=0; 
    for( let i =s.length-1 ; i >= 0 ; i --){
        revTemp+=s.charAt(i);
        console.log(revTemp)
        console.log(s.slice(0,s.length-i))
        if (revTemp==s.slice(0,s.length-i)){
            count++;
        }
    }
    return count 

    
}
console.log(removePalindromeSub("ababa"))