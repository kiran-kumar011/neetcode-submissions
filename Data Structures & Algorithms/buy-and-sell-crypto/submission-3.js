class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
       let lowestPrice = prices[0];
       let max = 0;
       for(let i=1; i < prices.length; i++) {
            if(lowestPrice >  prices[i]){
                lowestPrice = prices[i];
            }
           max= Math.max(prices[i]-lowestPrice, max)
       } 
       return max;
    }
}
