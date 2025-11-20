/** Definition for singly-linked list. */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function middleNode(node: ListNode | null): ListNode | null {
  let slow = node;
  let fast = node;

  while (fast !== null && fast.next !== null && slow !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}

function reverseList(node: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr = node;

  while (curr !== null) {
    const next = curr.next;

    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

export function isPalindrome(head: ListNode | null): boolean {
  const middle = middleNode(head);

  let left = head;
  let right = reverseList(middle);

  while (left !== null && right !== null) {
    if (left.val !== right.val) {
      return false;
    }

    left = left.next;
    right = right.next;
  }

  return true;
}
