class Solution {
    /**
     * @param {number[]} heights
     * @return {number[]}
     */
    findBuildings(heights) {
        let maxRight = heights[heights.length - 1]

        const result = []
        result.push(heights.length - 1)
        for(let i = heights.length - 2; i >= 0; i--) {
            if(heights[i] > maxRight) {
                result.push(i)
            }
            maxRight = Math.max(maxRight, heights[i])
            
        }

        return result.reverse()
    }
}
