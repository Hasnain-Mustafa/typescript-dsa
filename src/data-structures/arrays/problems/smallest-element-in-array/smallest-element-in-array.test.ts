import { smallestElement } from "./smallest-element-in-array";

describe("Smallest element in an array", () => {
  test("case 1", () => {
    const result = smallestElement([3, 3, 6, 1]);
    expect(result).toEqual(1);
  });

  test("case 2", () => {
    const result = smallestElement([3, 3, 0, 99, -40]);
    expect(result).toEqual(-40);
  });

  test("case 3", () => {
    const result = smallestElement([-4, -3, 0, 1, -8]);
    expect(result).toEqual(-8);
  });
});
