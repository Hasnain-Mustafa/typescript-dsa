import { secondSmallest } from "./second-smallest-element-in-array";

describe("Second smallest element in an array", () => {
  test("case 1", () => {
    const result = secondSmallest([3, 3, 6, 1]);
    expect(result).toEqual(3);
  });

  test("case 2", () => {
    const result = secondSmallest([3, 3, 0, 99, -40]);
    expect(result).toEqual(0);
  });

  test("case 3", () => {
    const result = secondSmallest([-4, -3, 0, 1, -8]);
    expect(result).toEqual(-4);
  });
});
