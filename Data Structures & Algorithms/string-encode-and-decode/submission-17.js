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
        let i=0; 
        let result = []
        while(i < str.length) {
            let j = i+1;
            while(str[j] !== '#') {
                j++;
            }
            console.log(i, j,"indes")
            console.log(str.slice(i, j),"str.slice(i, j)")
            const length = Number(str.slice(i, j));
            const s = str.slice(j+1, length+j+1);
            result.push(s)
            i = j + length + 1;
        }
        return result;
    }
    decode(str) {
       const result = [];
        let i = 0;
        while(i < str.length) {
            let j = i+1;
            while(str[j] !== '#') {
                j++;
            }
            const length = Number(str.slice(i, j));
            console.log(i, j, str.slice(i, j));
            result.push(str.slice(j+1, j+length+1));
            i = j + 1 + length;
        }
        return result;
    }
}
