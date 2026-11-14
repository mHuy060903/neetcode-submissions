class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
     maximumOddBinaryNumber(s) {
        let ones = 0;
        for (const c of s) {
            if (c === '1') ones++;
        }
        const zeros = s.length - ones;

        return '1'.repeat(ones - 1) + '0'.repeat(zeros) + '1';
    }
}
