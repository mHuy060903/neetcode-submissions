class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        const arr = new Array(nums.length + 1).fill(0)
        
        for(let i = 0; i < nums.length; i++) {
            arr[nums[i]] = 1
        }

        const result = [];

        for(let i = 1; i < arr.length; i++) {
            if(arr[i] === 0) {
                result.push(i)
            }
        }
        return result

    }
}
