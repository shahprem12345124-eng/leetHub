/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let res = 0;

    let mergedArr = [...nums1, ...nums2].sort((a, b) => a - b);

    let n = mergedArr.length;
    if(n % 2 === 1){
       res = mergedArr[Math.floor(n / 2)];
    } else {
      let middelOne = mergedArr[n / 2 -  1];
      let middelTwo = mergedArr[n / 2];

     res = (middelOne + middelTwo) / 2;
    }

    return res;
};