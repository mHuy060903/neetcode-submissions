class Solution {
    /**
     * @param {string[]} words
     * @return {number}
     */
    countPrefixSuffixPairs(words) {
         const isPrefixAndSuffix = (s1, s2) => {
            if (s1.length > s2.length) return false;

            for (let i = 0; i < s1.length; i++) {
                if (s1[i] !== s2[i]) return false;
            }

            let j = 0;
            for (let i = s2.length - s1.length; i < s2.length; i++) {
                if (s1[j] !== s2[i]) return false;
                j++;
            }

            return true;
        };

        let res = 0;
        for (let i = 0; i < words.length; i++) {
            for (let j = i + 1; j < words.length; j++) {
                if (isPrefixAndSuffix(words[i], words[j])) {
                    res++;
                }
            }
        }
        return res;
    }
}
