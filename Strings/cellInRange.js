//https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/description/


var cellsInRange = function(s) {
    let res=[];
    let cells=s.split(":")
    let startIndex=parseInt(cells[0].charAt(1));
    let endIndex=parseInt(cells[1].charAt(1));
    let startChar=cells[0].charCodeAt(0);
    let endChar=cells[1].charCodeAt(0);
    let index=0;
    for ( let i=startChar ; i <= endChar; i++){
        for ( let j =startIndex ; j <= endIndex ; j++){
            res[index]=String.fromCharCode(i)+j;
            index++;
        }
    }
    return res;
};
console.log(cellsInRange("K1:L2"))