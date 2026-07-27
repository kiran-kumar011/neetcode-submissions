class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        let i = 0;
        while(i < nums.length) {
            const diff = target - nums[i];
            
            if(map.has(diff)) {
                console.log("has value")
                return [map.get(diff), i];
            } 
            
            map.set(nums[i], i)
            i++;
        }
        return []
    }
}
