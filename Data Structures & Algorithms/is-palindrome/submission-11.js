class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        console.log(str,"str")
        const len = str.length - 1;
        for(let i=0; i< len; i++) {
            console.log(str[i],"s[i]")
            console.log(str[len - i], "s[s.length -i+1]")
            if(str[i] !== str[len - i]) {
                return false;
            }
        }
        return true
    }
}
