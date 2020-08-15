//modify array such that it is stored as smallest, largest, 2nd smallest, 2nd largest.....
function rearrange(arr,n){
    arr.sort();
    console.log(arr);
    var temparr=[]
    var i =0;
    var j =n-1
    while(i<=n/2 || j>n/2){
        temparr.push(arr[i]);
        i++;
        temparr.push(arr[j]);
        j--;
    }
    return temparr;
}
//console.log(rearrange([5, 8, 1, 4, 2, 9, 3, 7, 6],9))

//Given an array of integers, update every element with multiplication of previous and next element
function modifyArray(arr){
var temp = arr[0];
arr[0] = arr[0] * arr[1]
for(i=1; i<arr.length-1; i++){
    var curr = arr[i];
    arr[i] = temp* arr[i+1];
    temp = curr;
}
arr[arr.length-1]= temp* arr[arr.length-1]
return arr;
}