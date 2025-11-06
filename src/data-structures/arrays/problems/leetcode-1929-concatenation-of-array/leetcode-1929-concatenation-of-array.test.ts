import { getConcatenation } from "./leetcode-1929-concatenation-of-array";

describe("LeetCode 1929 - Concatenation of the Array", () => {
  test("case 1", () => {
    const result = getConcatenation([1, 2, 1]);
    expect(result).toEqual([1, 2, 1, 1, 2, 1]);
  });

  test("case 2", () => {
    const result = getConcatenation([1, 3, 2, 1]);
    expect(result).toEqual([1, 3, 2, 1, 1, 3, 2, 1]);
  });

  test("case 3", () => {
    const result = getConcatenation([1, 3, 4, 6]);
    expect(result).toEqual([1, 3, 4, 6, 1, 3, 4, 6]);
  });
});
