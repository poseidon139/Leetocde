//https://leetcode.com/problems/count-asterisks/description/

var countAsterisks = function(s) {
let count_star=0;  
let count_inside=0;
let count_pipe=0;

 for ( i of s ){
    if ( i =='*'){
        count_star++;
    }
    if(i == '|'){
        count_pipe++
    }
    if ((count_pipe%2)==1){
        if(i=='*'){
            count_inside++;
        }
    }
    
 }
 return (count_star-count_inside)
    
};

console.log(countAsterisks("*||||**||*||**|**||*|||**"))