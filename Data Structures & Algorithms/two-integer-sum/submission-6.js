class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
        let i=0;
        while(i < nums.length) {
            const diff = target - nums[i];
            if(map.has(diff)) {
                return [map.get(diff), i]
            } else {
                map.set(nums[i], i)
            }
            i++
        }
        return []
    }
}
