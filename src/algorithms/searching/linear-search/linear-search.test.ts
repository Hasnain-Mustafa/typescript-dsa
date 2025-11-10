import { linearSearch } from "./linear-search";

describe("Linear Search", () => {
  test("case 1", () => {
    const result = linearSearch([1, 2, 3, 4, 5], 3);
    expect(result).toEqual(2);
  });

  test("case 2", () => {
    const result = linearSearch([5, 4, 3, 2, 1], 5);
    expect(result).toEqual(0);
  });

  test("case 3", () => {
    const result = linearSearch([1, 6, 7, 8, 9, 10], 2);
    expect(result).toEqual(-1);
  });
});
