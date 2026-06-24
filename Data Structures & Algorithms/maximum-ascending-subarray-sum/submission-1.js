class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        
        let max = nums[0];
        let sum = nums[0];
        for(let i = 0; i < nums.length - 1; i++) {
            if(nums[i] < nums[i+1]) {
                sum+=nums[i+1]
            } else {
                sum = nums[i+1]
            }
            max = Math.max(max, sum)
        }
        return max
    }
}
