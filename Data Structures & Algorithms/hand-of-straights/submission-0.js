class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if(hand.length % groupSize !== 0) {
            return false
        }

        hand.sort((a,b) => a - b)
        
        const numArr = hand.length / groupSize
        for(let i = 1; i < numArr; i++) {
            let cur = hand[0]
            let next = cur + 1
            hand.splice(0, 1)
            let num = 1
            for(let i = 0; i < hand.length; i++) {
            if(num === groupSize) {
                break;
            }
            if(hand[i] === next) {
              num++
              cur = next
              next = hand[i] + 1
              hand.splice(i, 1)
            }
            }
            if(num !== groupSize) {
                return false
            } else {
                num = 1
            }
        }

        return true
    }
}
