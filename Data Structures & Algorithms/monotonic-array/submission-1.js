class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isMonotonic(nums) {
       let isIncrease = true
       let isDescrease = true

       for(let i = 1; i < nums.length; i++) {
        if(nums[i-1] < nums[i]) {
            isDescrease = false
        }

        if(nums[i-1] > nums[i]) {
            isIncrease = false
        }
       }
       return isDescrease || isIncrease
    }
}
