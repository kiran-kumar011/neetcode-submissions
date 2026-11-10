class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
         const stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // Push opening brackets
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            // No matching opening bracket
            if (stack.length === 0) return false;

            const last = stack.pop();

            // Check matching pairs
            if (
                (char === ')' && last !== '(') ||
                (char === '}' && last !== '{') ||
                (char === ']' && last !== '[')
            ) {
                return false;
            }
        }
    }

    return stack.length === 0;
    }
}
