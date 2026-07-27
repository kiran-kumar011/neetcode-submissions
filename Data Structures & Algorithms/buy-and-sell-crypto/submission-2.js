class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let lowestPrice = prices[0]
        for(let i=1; i<prices.length; i++) {
            if(lowestPrice > prices[i]) {
                lowestPrice = prices[i];
            } else {
                maxProfit= Math.max(maxProfit, prices[i] - lowestPrice)
            }
        }
        return maxProfit
    }
}
