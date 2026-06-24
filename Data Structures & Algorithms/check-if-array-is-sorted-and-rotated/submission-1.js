class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    //maxright compare to min left
    check(nums) {
        let count = 0


        for(let i = 0; i < nums.length; i++) {
            if(nums[i] > nums[(i+1) % nums.length]) {
                count++
            }
        }

        return count <= 1 
    }
}
