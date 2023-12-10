var finalValueAfterOperations = function(operations) {
    let x=0
    for(i of operations){
        if( i == "X++" || i == "++X"){
            x++;
        }
        else{
            x--;
        }
    }   
    return x;
};

console.log(finalValueAfterOperations(["++X","++X","X++"]))