class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {

        let i = 0;
        let j = nums.length - 1
        let res = nums[0]

        while(i <= j) {
            if(nums[i] < nums[j]) {
                res = Math.min(res, nums[i])
                break;
            }

            const mid = i + Math.floor((j - i) / 2)

            const cur = nums[mid]

            res = Math.min(res, cur)

            if(cur >= nums[i]) {
                i = mid + 1
            } else {
                j = mid - 1
            }
        }
        return res
    }
}
