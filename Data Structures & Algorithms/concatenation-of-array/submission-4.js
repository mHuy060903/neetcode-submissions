class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const n = nums.length
        const result = nums
        for(let i = 0; i <n; i++) {
            result.push(nums[i])
        }
        return result
    }
}
