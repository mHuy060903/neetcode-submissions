class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const max = Math.max(...piles)

        let i = 1
        let j = max
        let res = max + 1
        while(i<=j) {
        const mid = i + Math.floor((j - i) / 2)
        
        let count = 0
        
        for(let p = 0; p < piles.length; p++) {
            count += Math.ceil(piles[p] / mid)
        }

        if(count <= h) {
          res = Math.min(res, mid)
          j = mid - 1
        } else {
          i = mid + 1
        }

        }

        return res
    }
}
