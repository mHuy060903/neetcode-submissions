class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
      let seenChars = new Set();
        let left = 0, max = 0;

        for (let right = 0; right < s.length; right++) {
            while (seenChars.has(s[right])) {
                seenChars.delete(s[left]);
                left++;
            }

            seenChars.add(s[right]);
            max = Math.max(max, right - left + 1);
        }
        return max;

    }
}
