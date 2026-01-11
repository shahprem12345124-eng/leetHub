/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
     if(nums.length< 3) return;

   let arr = nums.sort((a,b)=>a-b)

   let closestValue = arr[0] + arr[1] + arr[2];  

   for(let i=0;i<arr.length;i++){
    let left = i + 1;
    let right = arr.length - 1;

    while(left<right){
        let sum = arr[i] + arr[left] +  arr[right];

        let distanceX = Math.abs(target - closestValue);
        let distanceY = Math.abs(target - sum);

        if(distanceY < distanceX){
            closestValue = sum;
        }

        if(target > sum){
            left++
        }else if(target < sum){
            right--
        }else {
            return sum;
        }
    }
   }

   return closestValue;
};