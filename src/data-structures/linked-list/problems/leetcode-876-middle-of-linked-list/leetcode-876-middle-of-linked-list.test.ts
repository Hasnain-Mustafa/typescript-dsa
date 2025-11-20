import { ListNode, middleNode } from "./leetcode-876-middle-of-linked-list";

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

describe("Leetcode - 876 Middle of linked list", () => {
  test("case 1", () => {
    const input = buildList([1, 2, 3, 4, 5]);
    const result = middleNode(input);
    console.log("Result:", result);
    expect(result!.val).toEqual(3);
  });

  test("case 2", () => {
    const input = buildList([1, 2, 3, 4, 5, 6]);
    const result = middleNode(input);
    console.log("Result:", result);
    expect(result!.val).toEqual(4);
  });

  test("case 3", () => {
    const input = buildList([1, 2, 3]);
    const result = middleNode(input);
    console.log("Result:", result);
    expect(result!.val).toEqual(2);
  });
});
