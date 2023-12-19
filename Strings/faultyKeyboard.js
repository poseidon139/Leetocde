//https://leetcode.com/problems/faulty-keyboard/description/

var finalString = function(s) {
    let prevStr="";
    let resStr="";
    for(i of s ){
        if (i =='i'){
            prevStr=""
            for (let j = resStr.length-1; j >=0 ; j--){
                prevStr+=resStr.charAt(j);
            }
            resStr=prevStr;
        }
        else{
            resStr+=i;
        }
    }
    return resStr
};

console.log(finalString("poiinter"));

