class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        
        const stack = [];
        for(let i=0; i < s.length; i++) {
            if(s[i] === "(" || s[i] === "[" || s[i] === '{') {
                stack.push(s[i]);
            } else {
                console.log(stack, s[i]);
                if(stack.length === 0) {
                    return false;
                }
                const last = stack.pop();
                if((last === '(' && s[i] !== ')') || (last === '{' && s[i] !== "}") || (last === '[' && s[i] !== ']')) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}
