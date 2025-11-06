import { isSorted } from "./check-if-array-is-sorted";

describe("Check if Array is sorted", () => {
  test("case 1", () => {
    const result = isSorted([1, 2, 3, 4, 5]);
    expect(result).toEqual(true);
  });

  test("case 2", () => {
    const result = isSorted([1, 99, 100]);
    expect(result).toEqual(true);
  });

  test("case 3", () => {
    const result = isSorted([-4, -3, 0, 1, -8]);
    expect(result).toEqual(false);
  });
});
