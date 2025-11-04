import { shuffle } from "./leetcode-1470-shuffle-the-array";

describe("LeetCode 1470 - Shuffle the Array", () => {
  test("case 1", () => {
    const result = shuffle([2, 5, 1, 3, 4, 7], 3);
    expect(result).toEqual([2, 3, 5, 4, 1, 7]);
  });

  test("case 2", () => {
    const result = shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4);
    expect(result).toEqual([1, 4, 2, 3, 3, 2, 4, 1]);
  });

  test("case 3", () => {
    const result = shuffle([1, 1, 2, 2], 2);
    expect(result).toEqual([1, 2, 1, 2]);
  });
});
