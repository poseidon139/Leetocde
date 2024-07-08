// Leetcode #1929 

var getConcatenation = function(nums) {
    let arr=[];
    let n=nums.length;
    for (let i =0 ; i < 2*n ; i++){
       if (i < n){
        arr[i]=nums[i];
       }
       else{
        arr[i]=nums[i-n]
       }
    }
    
    return arr;
};  
let nums= [1,2,1]
console.log(getConcatenation(nums));