/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @return {number}
     */
    pairSum(head) {
        const arr = []

        let cur = head

        while(cur) {
            arr.push(cur)
            cur = cur.next
        }
        
        let max = 0
        let j = arr.length - 1
        for(let i = 0; i < Math.floor(arr.length / 2); i++) {
             const sum = arr[i].val + arr[j].val
             max = Math.max(sum, max)
        }

        return max
    }
}
