class Solution {
    /**
     * @param {number[]} dist
     * @param {number[]} speed
     * @return {number}
     */
    eliminateMaximum(dist, speed) {
        const result = []
        const n = dist.length;
        for(let i = 0; i < dist.length; i++) {
            result.push(Math.ceil(dist[i]/speed[i]))
        }
        
        result.sort((a,b) => a - b)

        for (let t = 0; t < n; t++) {
            if (result[t] <= t) return t;
        }

        return n;
        
    }
}
