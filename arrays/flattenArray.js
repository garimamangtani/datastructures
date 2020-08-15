function flattenArray(arr){
    let newArr=[];
    for (let i=0; i<= arr.length-1; i++){
        if (!(Array.isArray(arr[i]))){
            newArr.push(arr[i]);
        } else{
            newArr = newArr.concat(flattenArray(arr[i]));
        }

    }
    return newArr;
}
console.log(flattenArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));