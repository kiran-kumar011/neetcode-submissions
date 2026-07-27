class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(s => `${s.length}#${s}`).join("") 
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i=0;
        while (i < str.length) {
            let j = i;
            while(str[j] !== '#' && j < str.length) j++;

            const length = parseInt(str.substring(i, j));
            res.push(str.substring(j+1, length + j + 1))
            i = length + j + 1;
        }
        return res;
    }
}
