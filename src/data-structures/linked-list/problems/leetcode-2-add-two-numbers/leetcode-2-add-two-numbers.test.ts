import { addTwoNumbers, ListNode } from "./leetcode-2-add-two-numbers";

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

describe("Leetcode - 2 Add Two Numbers", () => {
  test("case 1", () => {
    const input1 = buildList([2, 4, 3]);
    const input2 = buildList([5, 6, 4]);

    const result = addTwoNumbers(input1, input2);
    const resultArr = listToArray(result);
    expect(resultArr).toEqual([7, 0, 8]);
  });

  test("case 2", () => {
    const input1 = buildList([0]);
    const input2 = buildList([0]);

    const result = addTwoNumbers(input1, input2);
    const resultArr = listToArray(result);
    expect(resultArr).toEqual([0]);
  });

  test("case 3", () => {
    const input1 = buildList([9, 9, 9, 9, 9, 9, 9]);
    const input2 = buildList([9, 9, 9, 9]);

    const result = addTwoNumbers(input1, input2);
    const resultArr = listToArray(result);
    expect(resultArr).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
  });
});
