class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let t = amount
        let n = coins.length - 1
        let tt = 0
        while(t > 0 && n >= 0) {
        let a = Math.floor(t / coins[n])
        t -=  (coins[n] * a)
        tt+=a
        n--
        }

        return t === 0 ? tt : -1
    }
}
