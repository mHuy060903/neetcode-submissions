class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isArraySpecial(nums) {
        const n = nums.length;
        if(n <= 1) {
            return true
        }

        for(let i = 0; i < n - 1; i++) {
            if((nums[i] + nums[i+1]) % 2 === 0) {
                return false
            }
        }
        return true
    }
}
