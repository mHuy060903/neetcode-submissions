class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    heightChecker(heights) {
        const sorted =
            [...heights].sort((a, b) => a - b);
        let count = 0
        for(let i = 0; i < sorted.length; i++) {
            if(heights[i] !== sorted[i]) {
                count+=1
            }
        }
        return count
    }
}
