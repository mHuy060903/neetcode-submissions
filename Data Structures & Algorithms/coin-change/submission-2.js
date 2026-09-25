class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
      const dp = new Array(amount+1).fill(Infinity)
      dp[0] = 0

      for(let i = 1; i <= amount; i++) {
        for(let c of coins) {
            if(c <= i && dp[i - c] !== Infinity) {
                dp[i] = Math.min(dp[i], dp[i - c] + 1)
            }
        }
      }

      return dp[amount] !== Infinity ? dp[amount] : -1
    }
}
