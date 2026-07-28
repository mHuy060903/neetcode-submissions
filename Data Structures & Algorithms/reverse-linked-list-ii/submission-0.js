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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        let t = right - left

        if(t <= 0) {
            return head
        }

        let cur = head

        for(let i = 1; i <= t; i++) {
            cur = cur.next
        }

        let newNode = cur.next

        let prev = newNode
        cur = head

        for(let i = 0; i <= t; i++) {
            const next = cur.next
            cur.next = prev
            prev = cur
            cur = next
        }

        return prev

    }
}
