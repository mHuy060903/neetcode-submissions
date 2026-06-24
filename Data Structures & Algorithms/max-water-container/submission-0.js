class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0
        let j = heights.length - 1
        let max = 0
        while(i < j) {
         if(heights[i] < heights[j]) {
            max = Math.max(max,heights[i] * (j - i) )
            i++
         } else {
            max = Math.max(max,heights[j] * (j - i) ) 
            j--
         }
        }

        return max
    }
}
