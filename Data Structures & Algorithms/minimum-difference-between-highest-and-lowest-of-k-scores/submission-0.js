class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        nums.sort((a, b) => a - b)
        let min = 100000

        for(let i = 0; i <= nums.length - k; i++) {
           min = Math.min(min, nums[i+k-1] - nums[i])
        }

        return min
    }
}
