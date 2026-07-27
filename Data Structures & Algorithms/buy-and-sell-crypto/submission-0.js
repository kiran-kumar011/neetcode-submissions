class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let cheapPrice = prices[0], maxProfit = 0;
        for(let i=1; i < prices.length; i++) {
            if(cheapPrice > prices[i]) {
                cheapPrice= prices[i];
            } else {
                const profit = prices[i] - cheapPrice
                profit > maxProfit && (maxProfit = profit)
            }
        }
        return maxProfit;
    }
}
