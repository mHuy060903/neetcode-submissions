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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let cur1 = l1
        let prev1 = null
        let cur2 = l2
        let prev2 = null

        while(cur1) {
            const next = cur1.next
            cur1.next = prev1
            prev1 = cur1
            cur1 = next
        }

        while(cur2) {
            const next = cur2.next
            cur2.next = prev2
            prev2 = cur2
            cur2 = next
        }
        
        cur1 = prev1
        cur2 = prev2


        let c = 0
        
        let t = {val: 0, next: null}
        let node = t
        while(cur1 || cur2 || c) {
          const x = cur1 ? cur1.val : 0;
            const y = cur2 ? cur2.val : 0;

            const sum = x + y + c;

            c = Math.floor(sum / 10);

            node.next = new ListNode(sum % 10);
            node = node.next;

            if (cur1) cur1 = cur1.next;
            if (cur2) cur2 = cur2.next;
        }

        let cur3 = t.next
        let prev3 = null

        while(cur3) {
            const next = cur3.next
            cur3.next = prev3
            prev3 = cur3
            cur3 = next
        }

        return prev3

        
    }
}
