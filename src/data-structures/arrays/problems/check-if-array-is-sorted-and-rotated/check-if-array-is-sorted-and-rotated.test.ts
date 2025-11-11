import { isSortedAndRotated } from "./check-if-array-is-sorted-and-rotated";

describe("Leetcode - 1752 Check if Array is sorted and rotated", () => {
  test("case 1", () => {
    const result = isSortedAndRotated([3, 4, 5, 1, 2, 2]);
    expect(result).toEqual(true);
  });

  test("case 2", () => {
    const result = isSortedAndRotated([2, 1, 3, 4]);
    expect(result).toEqual(false);
  });

  test("case 3", () => {
    const result = isSortedAndRotated([1, 2, 3]);
    expect(result).toEqual(true);
  });
});
