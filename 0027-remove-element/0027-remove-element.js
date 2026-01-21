/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let n = nums.length;
    let k = 0;
    for(let i=0;i<n;i++){
        if(nums[i] !== val){
            nums[k] = nums[i];
            k++;
        }

    }

    return k;
};