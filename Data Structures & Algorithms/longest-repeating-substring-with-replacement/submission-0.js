class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // const map = new Map();
        // let left = 0, right =0;
        // let result = 0;
        // while (right < s.length) {
        //     const char = s[right]
        //     map.set(char, map.get(char)? map.get(char) + 1 :1 );
        //     let total = 0;
        //     for(const value of map.values()) {
        //         total = value + total;
        //     }

        //     if(total - k <= 2) {
        //         right++
        //         result = Math.max(total, result);
        //     } else {
        //         map.set(s[left], map.get(s[left]) -1);
        //         left++;
        //     }
        //     console.log(map, "map", total)
        // }
        // return result;
        const map = new Map();
        let left = 0, maxFreq = 0, result = 0;

        for (let right = 0; right < s.length; right++) {
            const char = s[right];
            map.set(char, (map.get(char) || 0) + 1);
            maxFreq = Math.max(maxFreq, map.get(char));

            // shrink while replacements needed exceed k
            while ((right - left + 1) - maxFreq > k) {
                map.set(s[left], map.get(s[left]) - 1);
                left++;
            }

            result = Math.max(result, right - left + 1);
        }
        return result;
    }
}
