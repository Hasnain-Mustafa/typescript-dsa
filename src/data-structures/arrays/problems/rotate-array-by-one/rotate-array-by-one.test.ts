import { rotateArray } from "./rotate-array-by-one";

describe("Rotate Array by one", () => {
  test("case 1", () => {
    const result = rotateArray([1, 2, 3, 4, 5]);
    expect(result).toEqual([2, 3, 4, 5, 1]);
  });

  test("case 2", () => {
    const result = rotateArray([2, 3, 4, 5, 1]);
    expect(result).toEqual([3, 4, 5, 1, 2]);
  });

  test("case 3", () => {
    const result = rotateArray([5]);
    expect(result).toEqual([5]);
  });
});
