function FindSubarraySum(arr, sum){
    var start =0;
    var currsum = 0;
    for(i=0; i<arr.length; i++){
        if (currsum===sum){
            return console.log("found sum between " + start + " and " + i);
            
        } if(currsum>sum){
            currsum = currsum - arr[start];
            start++;
        } if (currsum<sum){
            currsum=currsum+arr[i]
        }
    }
    console.log("Not Found");
}
FindSubarraySum([4, 2, -3, 1, 6],0)