import { secondLargest } from "./second-largest-element-in-array";

describe("Second largest element in an array", () => {
  test("case 1", () => {
    const result = secondLargest([3, 3, 5, 6, 1]);
    expect(result).toEqual(5);
  });

  test("case 2", () => {
    const result = secondLargest([3, 3, 0, 99, -40]);
    expect(result).toEqual(3);
  });

  test("case 3", () => {
    const result = secondLargest([-4, -3, 0, 1, -8]);
    expect(result).toEqual(0);
  });
});
