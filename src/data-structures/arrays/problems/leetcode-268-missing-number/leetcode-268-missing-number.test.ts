import { missingNumber } from "./leetcode-268-missing-number";

describe("Leetcode - 268 Missing Number", () => {
  test("case 1", () => {
    const result = missingNumber([3, 0, 1]);
    expect(result).toEqual(2);
  });

  test("case 2", () => {
    const result = missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
    expect(result).toEqual(8);
  });

  test("case 3", () => {
    const result = missingNumber([0, 1]);
    expect(result).toEqual(2);
  });
});
