class Solution {
    /**
     * @param {number[]} cardPoints
     * @param {number} k
     * @return {number}
     */
    maxScore(cardPoints, k) {
        
        let maxLeft = 0
        let maxRight = 0

        for(let i = 0; i < k; i++) {
            maxRight += cardPoints[i]
            maxLeft += cardPoints[cardPoints.length - (i + 1)]
        }

        return maxRight > maxLeft ? maxRight : maxLeft
    }
}
