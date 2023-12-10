var findWordsContaining = function(words, x) {
    let arr=[];
    let index=0;
    for (let i =0 ; i < words.length ; i ++){
        if (words[i].includes(x)){
            arr[index]=i;
            index++;
        }
    }
    return arr;
};

console.log(findWordsContaining(["abc","bcd","aaaa","cbc"],"a"))