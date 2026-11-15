class Solution {
    /**
     * @param {number[]} cardPoints
     * @param {number} k
     * @return {number}
     */
    maxScore(cardPoints, k) {
        
        let max = 0
        let l = 0
        let r = cardPoints.length - 1
        for(let i = 0; i < k; i++) {
            if(cardPoints[l] > cardPoints[r]) {
               max += cardPoints[l]
               l++
            } else {
               max += cardPoints[r]
               r--
            }
        }

        return max
    }
}
