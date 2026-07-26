class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const s = new Set()

        for(let i = 0; i < nums.length; i++) {
            if(s.has(nums[i])) {
                return nums[i]
            } 
            s.add(nums[i])
        }
    }
}
