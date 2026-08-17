class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0; 
        let lowestPrice = 0;
        for(let i=0; i < prices.length; i++) {
            if(prices[i] < lowestPrice || i === 0) {
                lowestPrice = prices[i];
                continue;
            }
            const profit = prices[i] - lowestPrice;
            max = Math.max(profit, max);
        }
        return max;
    }
}
