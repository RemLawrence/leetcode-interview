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

// O(n) time & O(1) space
function isPalindrome(head: ListNode | null): boolean {
    let turtle = head;
    let hare = head;
    // Grab the mid point of the linked list
    while (hare.next !== null && hare.next.next !== null) {
        turtle = turtle.next;
        hare = hare.next.next;
    }

    let prev = null;
    // split point
    let curr = turtle.next;
    // reverse the 2nd part of the LL
    while (curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    let p1 = head;
    let p2 = prev;
    while (p1 !== null && p2 !== null) {
        // compare the values of the two splitted linked lists
        if (p1.val !== p2.val) return false;
        p1 = p1.next;
        p2 = p2.next;
    }
    return true;
};
