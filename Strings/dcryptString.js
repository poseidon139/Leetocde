var freqAlphabets = function(s) {
    let map = new Map()
    //console.log("a".charCodeAt(0));
    for ( i =97 ; i<= 122 ; i++){
        map.set(i-96,String.fromCharCode(i));
    }
    //console.log(map)
    let str=s.split("");
    let res=[];
    for (let i =0 ; i< str.length ; i++){
        if(str[i]=='#'){
            res[i-1]=''
            res[i-2]=''
            let dig=Number.parseInt(str[i-2])*10+Number.parseInt(str[i-1]);
            res[i]=map.get(dig);
        }
        else{
            res[i]=map.get(Number.parseInt(str[i]));
        }
    }
    let stringres=''
    for(i of res){
        stringres+=i
    }
    return stringres;
};

console.log(freqAlphabets("10#11#12"))