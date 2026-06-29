class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    searchRange(nums, target) {
        let i = 0
        let j = nums.length - 1

        while(i <= j) {
            const m = i + Math.floor((j - i) / 2)

           

            if(nums[m] === target) {
                let start = m
                let end = m

                while(target === nums[start - 1] && start > 0) {
                       start--
                }

                while(target === nums[end + 1] && end < nums.length) {
                       end++
                }
                return [start, end]
            } else if(nums[m] < target) {
                i = m + 1
            } else {
                j = m - 1
            }
        }

        return [-1, -1]
    }
}
