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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let pA = headA;
    let pB = headB;
    while (pA !== pB) {
        if (!pA) {
            pA = headB;
        } else {
            pA = pA.next;
        }

        if (!pB) {
            pB = headA;
        } else {
            pB = pB.next;
        }
    }
    // Automatically takes care of the null case
    return pA;
};
