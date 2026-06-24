class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text) {
        const ex = 'balloon'
        const map = new Map()
        let count = 0;

        for(let char of text) {
            map.set(char, (map.get(char) || 0) + 1)
        }

         return Math.min(
            map.get('b') || 0,
            map.get('a') || 0,
            Math.floor((map.get('l') || 0) / 2),
            Math.floor((map.get('o') || 0) / 2),
            map.get('n') || 0
        );

    }
}
