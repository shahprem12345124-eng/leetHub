/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let arr = nums.sort((a,b)=>a-b);
    let ans = [];

    for(let start=0;start<arr.length;start++){
        let j=start+1, k = arr.length - 1;
        if(start > 0 && arr[start] === arr[start - 1]) continue;

        while(j < k){
            let sum = arr[start] + arr[j] + arr[k];

            if(sum < 0){
                j++
            } else if(sum > 0){
                k--;
            } else{
              ans.push([arr[start] , arr[j] , arr[k]]);
              j++; k--;

              while(j < k && arr[j] === arr[j - 1]) j++;
            }
        }
    }
    return ans;
};