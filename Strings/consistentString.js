var countConsistentStrings = function(allowed, words) {
    let count=0; 
    let flag=0;
    for (i of words){
        for (j of i){
            if(!allowed.includes(j)){
                flag=-1; 
                break;
            }
        }
        if(flag==-1){
            flag=0;
        }
        else{
            ++count
            console.log(i);
        }
    }
    return count;
};

console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]))