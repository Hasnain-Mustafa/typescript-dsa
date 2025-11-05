import { removeDuplicates } from "./leetcode-26-remove-duplicates-from-sorted-array";

describe("LeetCode 26 - remove duplicates from sorted array", () => {
  test("case 1", () => {
    const result = removeDuplicates([1, 1, 2]);
    expect(result).toEqual(2);
  });

  test("case 2", () => {
    const result = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
    expect(result).toEqual(5);
  });

  test("case 3", () => {
    const result = removeDuplicates([1, 2, 3, 3, 4]);
    expect(result).toEqual(4);
  });
});
