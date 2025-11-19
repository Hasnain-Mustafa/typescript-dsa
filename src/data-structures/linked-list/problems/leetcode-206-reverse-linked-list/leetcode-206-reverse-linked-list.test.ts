import { ListNode, reverseList } from "./leetcode-206-reverse-linked-list";

function buildList(arr: number[]): ListNode | null {
  if (arr.length === 0) {
    return null;
  }

  const head = new ListNode(arr[0]);

  let i = 1;
  let curr = head;
  while (i < arr.length) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;

    i += 1;
  }

  return head;
}

function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];

  let curr = head;
  while (curr !== null) {
    result.push(curr.val);
    curr = curr.next;
  }

  return result;
}

describe("Leetcode - 206 Reverse linked list", () => {
  test("case 1", () => {
    const input = buildList([1, 2, 3, 4, 5]);
    const result = reverseList(input);
    expect(listToArray(result)).toEqual([5, 4, 3, 2, 1]);
  });

  test("case 2", () => {
    const input = buildList([1, 2]);
    const result = reverseList(input);
    expect(listToArray(result)).toEqual([2, 1]);
  });

  test("case 3", () => {
    const input = buildList([]);
    const result = reverseList(input);
    expect(result).toEqual(null);
  });
});
