/** Definition for singly-linked list. */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function deleteNode(node: ListNode | null): void {
  const curr = node;

  if (curr === null || curr.next === null) {
    return;
  }

  curr.val = curr.next.val;
  curr.next = curr.next.next;
}
