//https://leetcode.com/problems/count-items-matching-a-rule/description/


var countMatches = function(items, ruleKey, ruleValue) {

    let i=(ruleKey=="type")?0:(ruleKey=="color")?1:2
    let count=0;
    for (j of items){
        if (j[i]==ruleValue){
            ++count;
        }
    }
    return count
};

console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color", "silver"));