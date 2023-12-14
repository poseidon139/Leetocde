//https://leetcode.com/problems/shuffle-string/description/
//Not Optimised

var restoreString = function(s, indices) {
    let res="";
    let a=[];
    let index=0;
    for (i of indices){
        a[i]=s.charAt(index)
        index++;
    }
    for (i of a){
        res=res.concat(i);
    }
    return res;
};

console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3]));