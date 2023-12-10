var numJewelsInStones = function(jewels, stones) {
    let count=0;
    for (i of jewels){
        for ( j of stones){
            if (i==j){
                ++count;
            }
        }
    }
    return count;
};

console.log(numJewelsInStones("aA","aAAbbbbbbb"))