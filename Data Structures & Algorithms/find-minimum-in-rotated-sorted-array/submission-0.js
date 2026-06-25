class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        const max = Math.max(...nums)

        let i = 0;
        let j = nums.length - 1
        let res = max

        while(i <= j) {
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
