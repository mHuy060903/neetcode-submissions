class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let max = Math.max(...piles)

      

        for(let i = 1; i <= max; i++) {
            let count = 0;
            for(let j = 0; j < piles.length; j++) {
                count+= Math.ceil(piles[j]/i)
            }
            if(count <= h) {
                return i
            }
        }
    }
}
