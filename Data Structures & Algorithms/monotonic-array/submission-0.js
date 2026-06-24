class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isMonotonic(nums) {
        let isIncre = true

        if(nums[0] > nums[1]) {
            isIncre = false
        }

        for(let i = 0; i < nums.length - 1; i++) {
            if(isIncre && nums[i] > nums[i+1]) {
                return false
            }

            if(!isIncre && nums[i] < nums[i+1]) {
                return false
            }
        }
        return true
    }
}
