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
       let slow = head,
           fast = head;

        while(fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }

        let prev = null,
        cur = slow

        while(cur) {
            const nex = cur.next
            cur.next = prev
            prev = cur
            cur = nex
        }

        let res = 0,
        first = head,
        second = prev
        while(second) {
            res = Math.max(res, first.val + second.val)
            first = first.next
            second = second.next
        }

        return res
    }
}
