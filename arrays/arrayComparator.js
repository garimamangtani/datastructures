function anagram(str1,str2) {
    if(str1.length !== str2.length){
        return false;
    }
    var obj1 ={};
    var obj2 = {}
    for (var i=0; i<str1.length; i++){
    if (obj1[str1[i]] >0){
        obj1[str1[i]] = obj1[str1[i]] +1;
    } else{
        obj1[str1[i]] = 1;
    }
    }
    for (var j=0; j<str2.length; j++){
        if (obj2[str2[j]] >0){
            obj2[str2[j]] = obj2[str2[j]] +1;
        } else{
            obj2[str2[j]] = 1;
        }
    }
    for (var k in obj1){
        if (!(k in obj2)){
            return false;
        }
        if (obj1[k] !== obj2[k]){
            return false;
        }
    
    }
    return true;
}

console.log(anagram("run","bat"));

