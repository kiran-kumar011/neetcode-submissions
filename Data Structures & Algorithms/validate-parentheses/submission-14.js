class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = {
            "{":'}',
            '}': '{',
            "[": ']',
            ']':'[',
            '(':')',
            ')':'('

        }
        const openingParenthesis = ["{", "(", "["];
       
        let str = [s[0]]
        for (let i=1; i<s.length; i++) {
            if(str.length && map[s[i]] === str[str.length -1]) {
                str.pop()
            } else {
                if(openingParenthesis.includes(s[i])) {
                    str.push(s[i]);
                } else {
                    return false
                }
            }
        }
        return str.length ? false : true
    }
}
