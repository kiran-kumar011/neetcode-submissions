class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // let length = 0;
        // for(let i=0; i < s.length; i++) {
        //     let map = new Set();
        //     for(let j=i+1; j < s.length; j++) {
        //         if(map.has(s[j])) {
        //             length = Math.max(map.size, length);
        //             break;
        //         } else {
        //             map.add(s[j]);
        //         }
        //     }
        // }
        // return length;
        
        let length = 0;
        if(!s.length) return length; 
        let left =0, right = 0;
        let map = new Map();
        while (right < s.length) {
            if(map.has(s[right]) && map.get(s[right]) >= left) {
                left = map.get(s[right]) + 1 ;
            } 
            map.set(s[right], right);
            length = Math.max(length, right- left + 1);
            right++;
        }
        return length;
    
    }
}
