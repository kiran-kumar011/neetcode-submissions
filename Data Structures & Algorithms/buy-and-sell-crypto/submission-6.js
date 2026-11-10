class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    // maxProfit(prices) {
    //     let max = 0; 
    //     let lowestPrice = 0;
    //     for(let i=0; i < prices.length; i++) {
    //         if(prices[i] < lowestPrice || i === 0) {
    //             lowestPrice = prices[i];
    //             continue;
    //         }
    //         const profit = prices[i] - lowestPrice;
    //         max = Math.max(profit, max);
    //     }
    //     return max;
    // }
    maxProfit(prices) {
        let maxP = 0;
        let lowestPrice = prices[0];
        for(let i=1; i < prices.length; i++) {
            if(lowestPrice > prices[i]) {
                lowestPrice = prices[i];
            }
            maxP = Math.max(prices[i] - lowestPrice, maxP);
        }
        return maxP;
    }
}
