function findmax(arr,num){
    var tsum=0;
    var msum=0;
    if (arr.length<0){
        return null;
    }
    for (var i=0; i<num;i++){
        msum = msum + arr[i];
    }
    tsum=msum;
    for (var i=num; i<arr.length;i++){
        tsum= tsum + arr[i]-arr[i-num];
        msum = Math.max(tsum,msum);
    
    }
    return msum;
}
console.log(findmax([1,2,3,4,5],2));