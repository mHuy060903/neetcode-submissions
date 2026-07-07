class Solution {
    /**
     * @param {number[]} fruits
     * @return {number}
     */
    totalFruit(fruits) {
        const m = new Map()
        let l = 0
        let max = 0
        let count = 0
        for(let r = 0; r < fruits.length; r++) {
            m.set(fruits[r], (m.get(fruits[r]) || 0) + 1)

             while(m.size > 2) {

                m.set(
                    fruits[l],
                    m.get(fruits[l]) - 1
                );

                if(m.get(fruits[l]) === 0) {
                    m.delete(fruits[l]);
                }

                l++;
            }

            max = Math.max(
                max,
                r - l + 1
            );

            
        }
        return max
    }
}
