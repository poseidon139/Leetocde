//https://leetcode.com/problems/sorting-the-sentence/description/


var sortSentence = function(s) {
    let arr=[];
    let words=s.split(' ');
    let res="";
    for (let i of words){
        let index=Number.parseInt(i.charAt(i.length-1));
        arr[index-1]=i.slice(0,i.length-1);
    }
    for(i of arr){
        res+=i+' ';
    }
    return res.trim();
};

console.log(sortSentence("is2 sentence4 This1 a3"))