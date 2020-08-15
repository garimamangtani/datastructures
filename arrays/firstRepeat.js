function firstRepeat(arr){
    var obj = {};
    for (i=0; i <arr.length; i++){
        if (obj[arr[i]]===undefined){
            obj[arr[i]] = 1;
        } else{
            obj[arr[i]] ++;
            if (obj[arr[i]]===2){
                return arr[i];
            }
            }
            
            }
            return "No Repeating element"
        }
    

console.log(firstRepeat([1,1,2,6,4,5,2]))