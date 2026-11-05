class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let maxStep = 0
        for(let i = 0; i < nums.length; i++) {
            if(i > maxStep) return false
            maxStep = Math.max(maxStep, i + nums[i])
            if(maxStep >= nums.length - 1) return true
        }

        return true
    }
}
