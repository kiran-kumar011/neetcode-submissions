class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = [];
        const n = nums.length;
        if (n < 3) return res;

        nums.sort((a, b) => a - b); // sort first

        for (let i = 0; i < n - 2; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicate anchors

            let l = i + 1;
            let r = n - 1;

            while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];

            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]]);

                // move l and r past duplicates
                const leftVal = nums[l];
                const rightVal = nums[r];
                while (l < r && nums[l] === leftVal) l++;
                while (l < r && nums[r] === rightVal) r--;
            } else if (sum < 0) {
                l++; // need a larger sum
            } else {
                r--; // need a smaller sum
            }
            }
        }

        return res;
    }
}
