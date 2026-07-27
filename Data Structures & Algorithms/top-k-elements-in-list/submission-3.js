class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
         const map = {};

    // Step 1: Count frequencies
    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
    }

    // Step 2: Sort entries by frequency descending
    const sorted = Object.entries(map).sort((a, b) => b[1] - a[1]);

    // Step 3: Extract top k elements
    return sorted.slice(0, k).map(entry => Number(entry[0]));
    }
}
