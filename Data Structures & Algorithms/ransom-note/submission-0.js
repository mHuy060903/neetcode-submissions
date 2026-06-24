class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        const ranFre = new Map()
        const magazineFre = new Map()

        for(let char of ransomNote) {
            ranFre.set(char, (ranFre.get(char) || 0) + 1)
        }

        for(let char of magazine) {
            magazineFre.set(char, (magazineFre.get(char) || 0) + 1)
        }

        for(let k of ranFre.keys()) {
            if(!magazineFre.has(k) || magazineFre.get(k) < ranFre.get(k)) {
                return false
            }
        }

        return true
    }
}
