class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const m = new Map()

        for(let i = 0; i < nums.length; i++) {
            const f = target - nums[i]
            if(m.has(f)) {
                return [i, m.get(f)]
            } else {
                m.set(nums[i], i)
            }
        }
    }
}
