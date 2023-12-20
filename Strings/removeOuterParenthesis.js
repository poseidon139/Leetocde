var removeOuterParentheses = function(s) {
    let res=""
    for (i =0 ; i < s.length ; i++){
        if (s.charAt(i) == '(' && s.charAt(i+1)==')'){
                res+=s.charAt(i)+s.charAt(i+1);
        }
    }
    return res;
};
console.log(removeOuterParentheses("()()"))