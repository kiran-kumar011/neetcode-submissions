class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(s => `${s.length}#${s}`).join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        const result = [];
        while(i < str.length) {
            let j = i + 1;
            while(str[j] !== '#') {
                j++;
            }
            const len = Number(str.slice(i, j));
            const string = str.slice(j + 1, len + j + 1);
            result.push(string)
            i = j + len + 1;
        }
        return result;
    }
}
