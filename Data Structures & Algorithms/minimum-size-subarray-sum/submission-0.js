class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {

        const sum = nums.reduce((a,b) => a + b, 0)

        if(sum < target) {
            return 0
        }

        let l = 0
        let min = nums.length
        let count = 0

        for(let r = 0; r < nums.length; r++) {

           count+=nums[r]

           while(count >= target) {
            min = Math.min(min, r - l + 1)
            count -= nums[l]
            l++
           }

        }

        return min
    }
}
