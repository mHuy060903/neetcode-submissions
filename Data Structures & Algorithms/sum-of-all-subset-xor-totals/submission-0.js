class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        function dfs(i, total) {
            if(nums.length === i) {
                return total
            }
            return dfs(i + 1, total ^ nums[i]) + dfs(i + 1, total)
        }
        return dfs(0, 0)
    }
}
