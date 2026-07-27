class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const clean = /[^a-zA-Z0-9]/.test(s) ? s.replace(/[^a-zA-Z]/g, '').split("") : s.split("");
        return clean.join("").toLowerCase() === clean.reverse().join("").toLowerCase();
    }
}
