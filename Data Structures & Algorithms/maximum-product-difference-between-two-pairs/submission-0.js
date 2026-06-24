class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProductDifference(nums) {
        const sort = [...nums].sort((a,b) => a - b)

        return (sort[sort.length - 1] * sort[sort.length - 2]) - (sort[0] * sort[1])
    }
}
