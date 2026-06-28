class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {
        let i = 0
        let j = nums.length - 1

        while(i <= j) {
            const m = i + Math.floor((j - i) / 2)

            if(nums[m] === target) {
                return true
            }

            if(nums[m] >= nums[i]) {
                if(target >= nums[m] || target < nums[i]) {
                    i = m + 1
                } else {
                    j = m - 1
                }
            }  else {
                if(target <= nums[m] || target > nums[j]) {
                    j = m - 1
                } else {
                    i = m + 1
                }
            }
        }
        return false
    }
}
