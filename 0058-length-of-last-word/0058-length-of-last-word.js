/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let trimmed = s.trim();
    let seperated = trimmed.split(" ");
    let last = seperated[seperated.length - 1];
    let len = last.length;

    return len;

};