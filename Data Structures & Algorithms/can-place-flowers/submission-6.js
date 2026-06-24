class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        let t = n;
        if(n === 0) {
            return true
        }
        for(let i = 0; i < flowerbed.length; i++) {

            const cur = flowerbed[i];
            if(cur === 0 && i === 0 && (flowerbed[i+1] === 0|| flowerbed.length=== 1)) {
                t--
                flowerbed[i] = 1
            }

            if(cur === 0 && i === flowerbed.length - 1 && flowerbed[i-1] === 0) {
                t--
                flowerbed[i] = 1
            }

            if(cur === 0 && flowerbed[i-1] === 0 && flowerbed[i+1] === 0) {
                t--
                flowerbed[i] = 1
            }

            if(t===0) {
                return true
            }

        }
        return false
    }
}
