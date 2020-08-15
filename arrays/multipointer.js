function countOfUniqueValue(arr){
    if (arr.length<1){
        return 0;
    }
    var left= 0;
    var right = left + 1;
    var count =0;
    while(right < arr.length){
          if(arr[left] !== arr[right]){
            count = count +1;
            left = right;
          }
          right++;
        }
        count++;

     return count;
    }    
console.log(countOfUniqueValue([4,4,4]));