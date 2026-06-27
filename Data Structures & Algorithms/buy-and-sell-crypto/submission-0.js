class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = Math.max(...prices)
        let profit = 0
        let minPrice = max
        for(let i = 0; i < prices.length; i++) {

             if(prices[i] >= minPrice) {
                profit = Math.max(profit, prices[i] - minPrice)
             } 
             minPrice = Math.min(minPrice, prices[i])

        }

        return profit
    }
}
