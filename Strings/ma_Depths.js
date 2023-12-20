//https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/

var maxDepth = function(s) {
    let depth=0;
    let max_depth=0;
    for (i of s ){
        if (i=='(' ){
            depth++;
        }
        if (i==')'){
            max_depth=(max_depth<depth)?depth:max_depth;
            depth--;
        }
    }
    return max_depth;
};

console.log(maxDepth("(1)+((2))+(((3)))"))