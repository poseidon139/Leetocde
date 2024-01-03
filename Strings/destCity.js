var destCity = function(paths) {
    let dest=""
    let map =new Map();
    for (i of paths){
        for ( j of i){
            if ( ! map.has(j)){
                map.set(j,1);
            }
            else{
                let count=map.get(j);
                ++count;
                map.set(j, count);
            }
        }
    }

    for ( i of map){
        if(i[i.length-1]==1)
            dest=i[0];
    }
    return dest;
};

console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]));