class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const m = new Map()
        const n = nums.length
        const major = Math.floor(n / 2)
        for(let i = 0; i < nums.length; i++) {
            m.set(nums[i], (m.get(nums[i]) || 0) + 1)
            if(m.get(nums[i]) > major) {
                return nums[i]
            }
        }
    }
}
