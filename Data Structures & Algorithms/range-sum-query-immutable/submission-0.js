class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.nums = nums;
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        let sum = 0;
        for(let i = 0; i < this.nums.length; i++) {
            if(i>=left && i <= right) {
                sum+=this.nums[i]
            }
        }
        return sum
    }
}
