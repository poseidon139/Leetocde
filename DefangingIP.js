var defangIPaddr = function(address) {
    let str="";
    for (i of address){
        if (i == "."){
            str=str.concat("[.]")
        }
        else{
            str=str.concat(i);
        }
    }  
    return str;
};

console.log(defangIPaddr("1.1.1.1"));