class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let m = new Map()

        for(let i = 0; i < nums.length; i++) {
            if(m.get(nums[i])) {
                if(Math.abs(Number(m.get(nums[i])) - i) <= k) {
                    return true
                }
            } else {
                m.set(nums[i], i.toString())
            }
        }
        return false
    }
}
