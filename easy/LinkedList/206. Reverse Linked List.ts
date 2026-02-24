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

// iterative
function reverseList(head: ListNode | null): ListNode | null {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

// recursive
function reverseList(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) return head;
    const new_head = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return new_head;
};
