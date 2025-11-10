import { rotateArrayByK } from "./leetcode-189-rotate-array-by-k";

describe("Leetcode - 189 Rotate Array by K", () => {
  test("case 1", () => {
    const result = rotateArrayByK([1, 2, 3, 4, 5], 2);
    expect(result).toEqual([4, 5, 1, 2, 3]);
  });

  test("case 2", () => {
    const result = rotateArrayByK([1, 2, 3, 4, 5], 3);
    expect(result).toEqual([3, 4, 5, 1, 2]);
  });

  test("case 3", () => {
    const result = rotateArrayByK([5], 2);
    expect(result).toEqual([5]);
  });
});
