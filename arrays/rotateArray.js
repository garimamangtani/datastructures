
//O(n*d)
function rotate(arr,d) {
    if (d > arr.length){
        d = d%arr.length;
    } 
    var temp = [];
    for (i=0; i <d; i++){
        temp.push(arr[0]);
        arr = arr.slice(1);
    }
    arr = arr.concat(temp);
    return arr;
}

//O(n)
function rotateOpt(arr,d) {
    if (d > arr.length){
        d = d%arr.length;
    } 
    reverse(arr,0,d-1);
    reverse(arr,d,arr.length-1);
    reverse(arr,0,arr.length-1);
    return arr;
}

// arr s,e both include reverse
function reverse(arr,s,e) {
    while(s<=e) {
        let temp = arr[s];
        arr[s] = arr[e];
        arr[e] = temp;
        s++;
        e--; 
    }
}



console.log(rotateOpt([1,2,3,4,5,6,7],9));