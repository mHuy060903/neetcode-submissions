class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    minIncrementForUnique(nums) {
         nums.sort((a, b) => a - b);
        let answer = 0,
            nextValue = 0;
        for (const x of nums) {
            let chosen = Math.max(x, nextValue);
            answer += chosen - x;
            nextValue = chosen + 1;
        }
        return answer;
    }
}
