/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let res = [];
    nums = nums.sort((a,b)=>a-b);
    let n = nums.length - 1;

    for(let i=0; i<=n;i++){
     if(i > 0 && nums[i] === nums[i - 1]) continue;

     for(let j=i+1;j<=n;j++){
        if(j > i + 1 && nums[j] === nums[j - 1]) continue;
        let left = j + 1;
        let right = n;
  
     while(left < right){
        let sum = nums[i] + nums[j] + nums[left] + nums[right];

        if(sum === target){
            res.push([nums[i], nums[j], nums[left], nums[right]]);

            while(left < right && nums[left] === nums[left + 1]) left++;
            while(left < right && nums[right] === nums[right - 1]) right--;

            left++;
            right--;
        } else if(sum < target){
            left++
        } else if(sum > target){
            right--;
        }
     }

     }
    }

    return res;
};