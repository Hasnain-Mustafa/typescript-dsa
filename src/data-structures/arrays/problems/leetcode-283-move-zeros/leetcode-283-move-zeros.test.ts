import { moveZeroes } from "./leetcode-283-move-zeros";

describe("Leetcode - 283 Move zeroes", () => {
  test("case 1", () => {
    const result = moveZeroes([0, 1, 0, 3, 12]);
    expect(result).toEqual([1, 3, 12, 0, 0]);
  });

  test("case 2", () => {
    const result = moveZeroes([2, 1]);
    expect(result).toEqual([2, 1]);
  });

  test("case 3", () => {
    const result = moveZeroes([0]);
    expect(result).toEqual([0]);
  });
});
