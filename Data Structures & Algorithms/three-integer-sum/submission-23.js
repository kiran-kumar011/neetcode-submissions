class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // const len = nums.length;
        // const result = new Map();
        // for(let i=0; i < len; i++) {
        //     for(let j=i+1; j < len; j++) {
        //         for(let k = j+1; k < len; k++) {
        //             if(nums[i] + nums[j] + nums[k] === 0) {
        //                 const sorted = [nums[i] , nums[j] , nums[k]].sort();
        //                 result.set(sorted.join("#"), [nums[i] , nums[j], nums[k]])
        //             }
        //         }
        //     }
        // } 
        
        // return [...result.values()]
        const sorted = nums.sort((a, b) => a - b);
        const length = nums.length;
        const result = new Map();
        for(let i=0; i < length; i++) {
            if (sorted[i] > 0) break;
            if (i > 0 && sorted[i] === sorted[i - 1]) continue;
            let left = i+1, right = length-1;
            while(left < right) {
            const sum = sorted[left] + sorted[right] + sorted[i];
                if(sum > 0) {
                    right--;
                    continue;
                } else if(sum < 0) {
                    left++;
                    continue;
                } else  {
                    const key = [sorted[i], sorted[right], sorted[left]].join('#');
                    if(!result.has(key))
                    result.set(key, [sorted[i], sorted[right], sorted[left]]);
                } 
                left++;
                right--;
            }

        }
        return [...result.values()];
    }
}
