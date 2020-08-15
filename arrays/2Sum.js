function twosum(arr,sum){
    arr = arr.sort();
    var left = 0;
    var right = arr.length -1;
    while (left<right){
        if (arr[left]+ arr[right]=== sum){
            return true;
        }
        if (arr[left]+ arr[right]> sum){
            right--;
        } 
        if (arr[left]+ arr[right]< sum){
            left++;
        } 
    }
    return false;
} 
console.log(twosum([1,4,3,2,6,5,7],7))