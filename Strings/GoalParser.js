var interpret = function(command) {
    let str="";
    for ( let i =0 ; i < command.length ; i++){
        if (command[i]=='G'){
            str=str.concat("G")
        }
        else if( command[i]== "(" && command[i+1] == ")" ){
            str=str.concat("o");
            i=i+1;
        }
        else if (command[i]== "(" && command[i+1] == "a" && command[i+2] == "l" && command[i+3] == ")"){
            str=str.concat("al");
            i = i+3;
        }
    }
    return str;
};

console.log(interpret("G()()()()(al)"))