/** Definition for singly-linked list. */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr = head;
  let newHead: ListNode | null = null;

  while (curr !== null) {
    const next = curr.next;

    curr.next = prev;
    prev = curr;
    curr = next;
  }

  newHead = prev;

  return newHead;
}
