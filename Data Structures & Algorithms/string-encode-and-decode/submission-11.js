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
        console.log(str,"string") 
        const decoded = [];
        let i=0;
        while (i < str.length) {
            let j = i
            while(str[j] !== '#') {
                j++;
            }
            const length = Number(str.slice(i,j));
            const word = str.slice(j+1, j+length+1);
            decoded.push(word)
            i = j+length+1
        }
        return decoded
    }
}
