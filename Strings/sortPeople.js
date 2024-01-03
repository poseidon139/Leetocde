var sortPeople = function(names, heights){
   
    let temp_n=[];
    let temp=[];
    for (i =0 ; i< heights.length ; i++){
        temp[i]=heights[i];
    }
    temp=temp.sort(function(a, b){return b-a});
    
    
    
    for (let i=0 ; i < heights.length ; i++ ){
        for (let  j =0 ; j < heights.length ; j++){
            if (heights[i]==temp[j]){
                temp_n[j]=names[i]

                break;
            }
        }
    }
    return temp_n;
}

console.log(sortPeople(["IEO","Sgizfdfrims","QTASHKQ","Vk","RPJOFYZUBFSIYp","EPCFFt","VOYGWWNCf","WSpmqvb"],[17233,32521,14087,42738,46669,65662,43204,8224]))