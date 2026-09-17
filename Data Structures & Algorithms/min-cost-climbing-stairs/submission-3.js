class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const t = [...cost, 0]

        for(let i = t.length - 3; i >= 0; i--) {
          t[i] = Math.min(t[i] + t[i+1], t[i+2] + t[i])
        }

        return t[0]
    }
}
