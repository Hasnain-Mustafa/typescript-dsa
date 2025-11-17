import { calculatePoints } from "./leetcode-682-baseball-game";

describe("Leetcode 682 - Baseball Game", () => {
  test("case 1", () => {
    const result = calculatePoints(["5", "2", "C", "D", "+"]);
    expect(result).toEqual(30);
  });

  test("case 2", () => {
    const result = calculatePoints(["5", "-2", "4", "C", "D", "9", "+", "+"]);
    expect(result).toEqual(27);
  });

  test("case 3", () => {
    const result = calculatePoints(["1", "C"]);
    expect(result).toEqual(0);
  });
});
