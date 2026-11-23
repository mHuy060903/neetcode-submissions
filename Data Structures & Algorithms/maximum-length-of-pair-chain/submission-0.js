class Solution {
    /**
     * @param {number[][]} pairs
     * @return {number}
     */
    findLongestChain(pairs) {
        pairs.sort((a, b) => a[1] - b[1]);
        let length = 1;
        let end = pairs[0][1];

        for (let i = 1; i < pairs.length; i++) {
            if (end < pairs[i][0]) {
                length++;
                end = pairs[i][1];
            }
        }

        return length;
    }
}
