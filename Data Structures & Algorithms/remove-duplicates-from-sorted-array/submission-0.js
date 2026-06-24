class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
          let j = 1;

    for(let i = 1; i < nums.length; i++) {

        if(nums[i] !== nums[j - 1]) {
            nums[j] = nums[i];
            j++;
        }
    }

    return j;
    }
}
