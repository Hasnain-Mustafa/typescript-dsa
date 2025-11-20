import { isPalindrome, ListNode } from "./leetcode-234-palindrome-linked-list";

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

describe("Leetcode - 234 Palindrome linked list", () => {
  test("case 1", () => {
    const input = buildList([1, 2, 2, 1]);
    const result = isPalindrome(input);
    expect(result).toEqual(true);
  });

  test("case 2", () => {
    const input = buildList([1, 2]);
    const result = isPalindrome(input);
    expect(result).toEqual(false);
  });

  test("case 3", () => {
    const input = buildList([1]);
    const result = isPalindrome(input);
    expect(result).toEqual(true);
  });
});
