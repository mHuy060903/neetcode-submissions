class Solution {
    /**
     * @param {number[]} nums
     * @param {number} p
     * @return {number}
     */
    minSubarray(nums, p) {
        const sum = nums.reduce((acc, cur) => acc + cur, 0)

        if(sum % p === 0) {
            return 0
        }

        let min = 100001
        let has = false

        for(let i = 0; i < nums.length; i++) {
            let t = sum
            for(let j = i; j < nums.length; j++) {
              t -= nums[j]
              if(t % p === 0) {
                has = true
                min = Math.min(j - i + 1, min)
              }
            }
        }

        return has ? min === nums.length || -1 : -1
    }
}
