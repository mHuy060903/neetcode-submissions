class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(nums, k) {
        let nums1 = 0

        let l = 0
        let max = 0

        for(let r = 0; r < nums.length; r++) {
            if(nums[r] === 1) {
                nums1+=1
            }

            const nums0 = (r - l + 1) - nums1

            if(nums0 <= k) {
                max = Math.max(max, r - l + 1)
            } else {
                if(nums[l] === 1) {
                    nums1 -= 1
                
                }
                l++

            }
        }

        return max
    }
}
