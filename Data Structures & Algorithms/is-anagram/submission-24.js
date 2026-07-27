class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // if(s.length !== t.length) {
        //     return false;
        // }
        // const countS = new Array(26).fill(0);
        // const countT = new Array(26).fill(0)
        // for(let i=0; i<s.length; i++) {
        //     countS[s[i].charCodeAt() - 97]++;
        //     countT[t[i].charCodeAt() - 97]++;
        // }
        
        // return countS.join('#') === countT.join('#');
        // sort both the string and check whether they are equal or not.
        return s.split('').sort().join() === t.split('').sort().join()
         
    }
}
