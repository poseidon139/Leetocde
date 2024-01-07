//https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/description/


var areOccurrencesEqual = function(s) {
    let map=new Map();
    let set=new Set();
    let res= true;
    let arr=[];
    for (let i =0 ; i <s.length ; i++){
        if(! set.has(s.charAt(i))){
            map.set(s.charAt(i),1);
            set.add(s.charAt(i));
        }
        else{
            let count=map.get(s.charAt(i));
            count++;
            map.set(s.charAt(i),count);
        }
    }
    // console.log(map)
    const it=map.values();
    for (let i =0 ; i < map.size ; i++){
        arr[i]=it.next().value;
    }
    // console.log(arr);

    for (let i =0;  i < arr.length-1; i++){
        if (arr[i]!=arr[i+1]){
            res=false;
        }
    }

    return res;

};

console.log(areOccurrencesEqual("aabb"))