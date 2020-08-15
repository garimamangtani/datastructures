function reverseArray(arr,s,e){
    if (s>=e){
        return arr;
    }
    var temp = arr[s];
    arr[s] = arr[e];
    arr[e] = temp;
    console.log(arr,s,e);
    return reverseArray(arr,s+1,e-1);
    
}

console.log(reverseArray([1,2,3,4,5],0,4))

function leastAvg(arr,k,s){
    if (s+k>arr.length){
        return Number.MAX_VALUE; 
    }
    var sum=0
    for (i=s; i<s+k; i++){
        sum= sum + arr[i];
    }
    var avg= Math.floor(sum/k);
    console.log(avg);
    newavg= leastAvg(arr,k, s+1); 
    return Math.min(avg,newavg);
}

//console.log(leastAvg([2,4,6,5,7,8,9,1,23,90],3,0));