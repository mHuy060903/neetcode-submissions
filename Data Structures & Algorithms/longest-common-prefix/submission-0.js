class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = "";
        
        const first = strs[0]
        for(let i = 0; i < first.length; i++) {
            const char = first[i]

            for(let j = 1; j < strs.length; j++) {
                if(strs[j][i] !== char) {
                    return prefix
                }
            }
            prefix+=char
        }
        return prefix
    }
}
