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
        console.log(str,"string")
        let i=0; 
        let result = []
        while(i < str.length) {
            let j = i+1;
            while(str[j] !== '#') {
                j++;
            }
            const length = Number(str.slice(i, j));
            console.log(length,"length", j+1);
            const s = str.slice(j+1, length+j+1);
            console.log(s, "sliced");
            result.push(s)
            i = j + length + 1;
        }
        return result;
    }
}
