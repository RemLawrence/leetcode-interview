/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry = 0;
    let dummy = new ListNode(0);
    let current = dummy;
    while (l1 || l2) {
        const result = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
        if (result >= 10) {
            carry = Math.floor(result / 10);
            current.next = new ListNode(result % 10);
        } else {
            carry = 0;
            current.next = new ListNode(result);
        }
        // Move pointers
        current = current.next;
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    // Add carry if there's still one after the loop
    if (carry) current.next = new ListNode(carry);
    return dummy.next;
};
