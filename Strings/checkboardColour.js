//https://leetcode.com/problems/determine-color-of-a-chessboard-square/description/

var squareIsWhite = function(coordinates) {
    let x=coordinates.charAt(0);
    let y=Number.parseInt(coordinates.charAt(1));
    let res=true;
    if ((x.charCodeAt(0))%2 == 1 && y%2 == 1){
        res=false;
    }
    if ((x.charCodeAt(0))%2 == 0 && y%2 == 0){
        res=false;
    }
    return res;
};

console.log(squareIsWhite("a1"));