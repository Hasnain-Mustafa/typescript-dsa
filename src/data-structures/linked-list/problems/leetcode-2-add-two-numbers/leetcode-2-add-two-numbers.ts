/** Definition for singly-linked list. */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let sum = 0;
  let carry = 0;

  let temp1 = l1;
  let temp2 = l2;

  const head = new ListNode(0);
  let curr = head;
  while (temp1 !== null || temp2 !== null || carry !== 0) {
    const num1 = temp1 ? temp1.val : 0;
    const num2 = temp2 ? temp2.val : 0;

    sum = num1 + num2 + carry;
    carry = Math.floor(sum / 10);

    curr.next = new ListNode(sum % 10);
    curr = curr.next;

    if (temp1 !== null) {
      temp1 = temp1.next;
    }
    if (temp2 !== null) {
      temp2 = temp2.next;
    }
  }

  return head.next;
}
