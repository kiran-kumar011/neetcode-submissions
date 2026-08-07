class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        const len = str.length - 1;
        for(let i=0; i< len; i++) {
            if(str[i] !== str[len - i]) {
                return false;
            }
        }
        return true
    }
}
