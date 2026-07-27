class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const hasSpecialChar = /[^a-zA-Z0-9]/.test(s)
        const clean = hasSpecialChar ? s.replace(/[^a-zA-Z]/g, '').split("") : s.split("");
        console.log(clean,"clean")
        return clean.join("").toLowerCase() === clean.reverse().join("").toLowerCase();
    }
}
