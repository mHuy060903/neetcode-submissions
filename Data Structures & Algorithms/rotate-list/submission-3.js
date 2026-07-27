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
     * @param {number} k
     * @return {ListNode}
     */
    rotateRight(head, k) {
         if (!head || !head.next || k === 0) {
        return head;
    }
      let tail = head,length = 1

      while(tail.next) {
        length++
        tail = tail.next
      }

      k = k % length
      if(k === 0) {
        return head
      }
      let cur = head
      for(let i = 1; i <= length - k - 1; i++) {
        cur = cur.next
      }
      let newNode = cur.next
      cur.next = null
      tail.next = head

      return newNode
    }
}
