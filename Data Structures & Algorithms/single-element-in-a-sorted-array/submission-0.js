class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNonDuplicate(nums) {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            const m = l + Math.floor((r - l) / 2);

            if (
                (m - 1 < 0 || nums[m - 1] !== nums[m]) &&
                (m + 1 === nums.length || nums[m] !== nums[m + 1])
            ) {
                return nums[m];
            }

            const leftSize =
                nums[m - 1] === nums[m]
                    ? m - 1
                    : m;

            if (leftSize % 2 === 1) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        return -1;
    }
}
