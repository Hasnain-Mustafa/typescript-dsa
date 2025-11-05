import { largestElement } from "./largest-element-in-array";

describe("Largest element in an array", () => {
  test("case 1", () => {
    const result = largestElement([3, 3, 6, 1]);
    expect(result).toEqual(6);
  });

  test("case 2", () => {
    const result = largestElement([3, 3, 0, 99, -40]);
    expect(result).toEqual(99);
  });

  test("case 3", () => {
    const result = largestElement([-4, -3, 0, 1, -8]);
    expect(result).toEqual(1);
  });
});
