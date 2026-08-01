class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    specialArray(nums) {
        const max = Math.max(...nums)

        for(let i = 1; i <= max; i++) {
            let c = 0
            for(let j = 0; j < nums.length; j++) {
             if(nums[j] >= i) {
                c++
             }
            }

            if(i === c) {
                return i
            }
        }

        return -1
    }
}
