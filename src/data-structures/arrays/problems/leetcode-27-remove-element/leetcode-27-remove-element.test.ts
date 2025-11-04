import { removeElement } from "./leetcode-27-remove-element";

describe("LeetCode 1470 - removeElement the Array", () => {
  test("case 1", () => {
    const result = removeElement([3, 2, 2, 3], 3);
    expect(result).toEqual(2);
  });

  test("case 2", () => {
    const result = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
    expect(result).toEqual(5);
  });

  test("case 3", () => {
    const result = removeElement([5, 6, 7, 1, 6], 6);
    expect(result).toEqual(3);
  });
});
