class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    arrangeCoins(n) {

        let t = n
        let count = 1
        while(t >= count) {
         t -= count
         count += 1

        }
        return count - 1 
        
    }
}
