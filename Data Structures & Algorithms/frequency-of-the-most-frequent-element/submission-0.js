class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    maxFrequency(nums, k) {
        nums.sort((a,b) => a - b)

        let l = 0
        let max = 0

        for(let r = 0; r < nums.length; r++) {
            const maxCount = nums[r] * (r-l+1)
            let count = 0
            for(let i = l; i <= r; i++) {
                count += nums[i]
            }

            if(maxCount - count <= k) {
                max = Math.max(max, r -l + 1)
            } else {
                l+=1
            }
        }

        return max
    }
}
