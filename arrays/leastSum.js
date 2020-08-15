function shortSumArray(arr,sum){
    var s=0;
    var e=0;
    var minlen = arr.length;
    var currsum = 0;
    while(currsum<=sum && e <arr.length){
        currsum= currsum+ arr[e];
        e++;
    }
    while(currsum>sum && s<arr.length){   
        if (e-s<minlen){
            minlen = e-s;
        }
        currsum= currsum-arr[s];
        s++;
    }
return minlen;

}
console.log(shortSumArray([1, 11, 100, 1, 0, 200, 3, 2, 1, 250],280))