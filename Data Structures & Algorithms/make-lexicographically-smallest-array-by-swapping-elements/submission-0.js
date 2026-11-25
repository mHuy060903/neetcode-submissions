class Solution {
    /**
     * @param {number[]} nums
     * @param {number} limit
     * @return {number[]}
     */
    lexicographicallySmallestArray(nums, limit) {
        const n = nums.length;
        const idx = Array.from({ length: n }, (_, i) => i);
        idx.sort((a, b) => nums[a] - nums[b]);

        const res = new Array(n);
        let start = 0;

        for (let i = 1; i <= n; i++) {
            // hết nhóm khi tới cuối, hoặc khoảng cách > limit
            if (i === n || nums[idx[i]] - nums[idx[i - 1]] > limit) {
                // các chỉ số của nhóm [start, i-1]
                const group = idx.slice(start, i);
                const positions = [...group].sort((a, b) => a - b);

                // giá trị của nhóm đã tăng dần (theo idx), gán vào vị trí tăng dần
                for (let k = 0; k < group.length; k++) {
                    res[positions[k]] = nums[group[k]];
                }
                start = i;
            }
        }

        return res;
    }
}
