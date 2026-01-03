/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

     if (s.length < 2) return s;
    let start = 0;
    let maxLength = 1;

    function letAdd(left,right){
        while(left>=0 && right<s.length && s[left]===s[right]){
           const length = right -left + 1;

           if(length > maxLength){
            maxLength = length;
            start = left;
           }
           left--;
           right++;
        }
    }

    for(let i=0;i>s.length;i++){
        letAdd(i,i); // for odd
        letAdd(i,i+1);// for even
    }

    return s.substring(start,start  + maxLength)
};