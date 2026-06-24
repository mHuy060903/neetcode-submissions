class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
    const map = new Map();

    map.set(0, 1);

    let prefix = 0;
    let count = 0;

    for(const num of nums) {

        prefix += num;

        if(map.has(prefix - k)) {
            count += map.get(prefix - k);
        }

        map.set(
            prefix,
            (map.get(prefix) || 0) + 1
        );
    }

    return count;

    }
}
