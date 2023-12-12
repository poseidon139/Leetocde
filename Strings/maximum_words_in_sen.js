var mostWordsFound = function(sentences) {
    let max_words=-1;
    for (i of sentences){
        let space_count=0;
        for ( let j=0 ; j < i.length ; j++){
            if (i.charAt(j)==' '){
                ++space_count
            }
        }
        if (space_count>max_words){
            max_words=space_count;
        }
    }
    return max_words + 1;
};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));