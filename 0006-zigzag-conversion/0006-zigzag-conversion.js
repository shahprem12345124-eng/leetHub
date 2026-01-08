/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1 || s.length < numRows) return s;
    let count = 0;
    let distance = false;

    let arr = new Array(numRows).fill('');

    for(let i=0; i<s.length;i++){
        let crr = s[i];

         arr[count] += crr;

        if(count === 0 || count >= numRows -1) distance = !distance;

        distance ? count++ : count--;
    }

    return arr.join("")
};