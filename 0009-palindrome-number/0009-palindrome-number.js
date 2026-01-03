/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   
   let str = x.toString();

   if(x[0]==="-") return false;

   let reversed = str.split("").reverse().join("")

   return str === reversed;
};