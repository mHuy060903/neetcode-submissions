class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArrayByParity(nums) {
        let j = 0
        

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] % 2 === 0) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
                j++
            }
        }
       return nums
       
    }
}
