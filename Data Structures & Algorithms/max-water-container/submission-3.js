class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater = 0;
        let left = 0, right = heights.length-1;
        while(left <= right) {
            const leastheight = Math.min(heights[left],heights[right]); 
            console.log(leastheight,"leastheight", heights[left],"left", heights[right],"right")
            const max = leastheight * (right-left);
            maxWater = Math.max(max, maxWater);
            if(heights[right] < heights[left]) {
                right--;
            } else {
                left++;
            }
        }
        return maxWater;
    }
}
