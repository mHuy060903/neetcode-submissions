class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        nums.sort((a,b) => Math.abs(a) - Math.abs(b))


        return nums.map(n => n * n)
    }
}
