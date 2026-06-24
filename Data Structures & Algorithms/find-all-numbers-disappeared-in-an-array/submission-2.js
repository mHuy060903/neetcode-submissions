class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        for(let i = 0; i < nums.length; i++) {
            nums[Math.abs(nums[i]) - 1] = Math.abs(nums[nums[i] - 1]) * -1
        }
        const result = []
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] > 0) {
              result.push(i+1)
            }
        }
        return result

    }
}
