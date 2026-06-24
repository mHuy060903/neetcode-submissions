class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    divideArray(nums) {
        const n = nums.length;
        const m = new Map()


        for(let i = 0; i < n; i++) {
            m.set(nums[i], (m.get(nums[i]) || 0) + 1)
        }

        for(let k of m.keys()) {
            if(m.get(k) % 2 !== 0) {
                return false
            }
        }
        return true
    }
}
