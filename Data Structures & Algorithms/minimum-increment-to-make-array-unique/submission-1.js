class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    minIncrementForUnique(nums) {
         nums.sort((a, b) => a - b);
        let move = 0
        for(let i = 1; i < nums.length; i++) {
           if(nums[i] <= nums[i-1]) {
            let target = nums[i-1] + 1
            move += target - nums[i]
            nums[i] = target
           }
        }
        return move
    }
}
