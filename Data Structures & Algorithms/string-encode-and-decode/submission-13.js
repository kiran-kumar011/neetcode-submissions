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
       const result = [];
       let i = 0; 
       while(i < str.length) {
            let j = i+1;
            while(str[j] !== '#') {
                j++;
            }
            const length = Number(str.slice(i,j));
            const string = str.slice(j+1, length+j+1);
            result.push(string)
            i = length+j+1; 
       }
       return result;
    }
}
