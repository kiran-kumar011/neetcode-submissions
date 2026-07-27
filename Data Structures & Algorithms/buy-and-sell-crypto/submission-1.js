class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let lowestPrice = prices[0]
        for(let i=0; i<prices.length; i++) {
            if(lowestPrice > prices[i]) {
                lowestPrice = prices[i];
            }
            const sum = prices[i] - lowestPrice;
            if(sum > maxProfit) {
                maxProfit = sum;
            }
        }
        return maxProfit
    }
}
