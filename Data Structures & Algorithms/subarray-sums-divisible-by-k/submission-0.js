class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraysDivByK(nums, k) {
        let count = 0

        for(let i = 0; i < nums.length - 1; i++) {
            let s = nums[i]
            if(s % k === 0) {
                count +=1
            }
            for(let j = i + 1; j < nums.length; j++) {
             s += nums[j]
               if(s % k === 0) {
                count +=1
            }
            }
        }
        return count
    }
}
