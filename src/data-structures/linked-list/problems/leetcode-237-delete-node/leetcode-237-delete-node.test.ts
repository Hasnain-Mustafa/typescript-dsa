import { deleteNode, ListNode } from "./leetcode-237-delete-node";

function buildList(arr: number[]): ListNode | null {
  if (arr.length === 0) {
    return null;
  }
  const head = new ListNode(arr[0]);
  let curr = head;

  for (let i = 1; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }
  return head;
}

function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let curr = head;
  while (curr) {
    result.push(curr.val);
    curr = curr.next;
  }
  return result;
}

function findNode(head: ListNode | null, value: number): ListNode | null {
  let curr = head;
  while (curr) {
    if (curr.val === value) {
      return curr;
    }
    curr = curr.next;
  }
  return null;
}

describe("LeetCode 237 - Delete Node in a Linked List", () => {
  test("case 1", () => {
    const head = buildList([4, 5, 1, 9]);
    const node = findNode(head, 5);

    deleteNode(node);

    expect(listToArray(head)).toEqual([4, 1, 9]);
  });

  test("case 2", () => {
    const head = buildList([4, 5, 1, 9]);
    const node = findNode(head, 1);

    deleteNode(node);

    expect(listToArray(head)).toEqual([4, 5, 9]);
  });

  test("case 3", () => {
    const head = buildList([9, 8]);
    const node = findNode(head, 9);

    deleteNode(node);

    expect(listToArray(head)).toEqual([8]);
  });
});
