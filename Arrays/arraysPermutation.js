//Leetcode #1920  given an array ans[], make a zero-based permutation array such that per[i]={num[num[i]]}

var buildArray = function(nums) {
    let ans=[];
    for ( let i =0 ; i < nums.length ; i++){
        ans[i]=nums[nums[i]];
    }
    return ans;
};
let nums=[5,0,1,2,3,4];
console.log(buildArray(nums))