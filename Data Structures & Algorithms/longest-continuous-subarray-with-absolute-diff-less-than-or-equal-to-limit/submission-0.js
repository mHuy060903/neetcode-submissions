class Solution {
    /**
     * @param {number[]} nums
     * @param {number} limit
     * @return {number}
     */
    longestSubarray(nums, limit) {
       const maxDeque = [];
        const minDeque = [];

        let left = 0;
        let result = 0;

        for(let right = 0; right < nums.length; right++) {

            while(
                maxDeque.length &&
                maxDeque[maxDeque.length - 1] < nums[right]
            ) {
                maxDeque.pop();
            }

            maxDeque.push(nums[right]);

            while(
                minDeque.length &&
                minDeque[minDeque.length - 1] > nums[right]
            ) {
                minDeque.pop();
            }

            minDeque.push(nums[right]);

            while(
                maxDeque[0] - minDeque[0] > limit
            ) {

                if(nums[left] === maxDeque[0]) {
                    maxDeque.shift();
                }

                if(nums[left] === minDeque[0]) {
                    minDeque.shift();
                }

                left++;
            }

            result = Math.max(
                result,
                right - left + 1
            );
        }

        return result;
    }
}
