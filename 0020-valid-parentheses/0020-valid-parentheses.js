/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (!s) return false;

    const n = s.length;
    let stack = [];

    //pusing all the open brackets on the stack
    for (let i = 0; i < n; i++) {
        let c = s[i];
        if (c === "(" ||
            c === "{" ||
            c === "[") {
            stack.push(c);
        } 

        // for closing bracket checking 
       
        
         else {
            if (stack.length === 0) return false;
             let top = stack[stack.length - 1]

        if (
            (c === ")" && top === "(") ||
            (c === "}" && top === "{") ||
            (c === "]" && top === "[")
        ) {
            stack.pop();
        } else {
            return false;
        }
         }
    }

    return stack.length === 0;
};