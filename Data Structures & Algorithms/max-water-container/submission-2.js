class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const length = heights.length;
        let maxArea = 0;
        let left = 0, right = length-1;
        while(left < right) {
            const h = Math.min(heights[left] , heights[right]);
            const area = h * (right-left);
            if(heights[left] <= heights[right]) {
                left++
            } else {
                right--;
            }
            if(maxArea < area) {
                maxArea = area;
            }
        }
        return maxArea;
    }
}
