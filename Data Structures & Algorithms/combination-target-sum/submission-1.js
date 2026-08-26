class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let ans = [];
        let cur = [];
        this.backtrack(nums, target, ans, cur, 0);
        return ans;
    }

    
}
