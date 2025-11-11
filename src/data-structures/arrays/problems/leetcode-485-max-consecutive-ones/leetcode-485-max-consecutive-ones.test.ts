import { maxConsecutiveOnes } from "./leetcode-485-max-consecutive-ones";

describe("Leetcode - 485 Max consecutive ones", () => {
  test("case 1", () => {
    const result = maxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
    expect(result).toEqual(3);
  });

  test("case 2", () => {
    const result = maxConsecutiveOnes([1, 0, 1, 1, 0, 1]);
    expect(result).toEqual(2);
  });

  test("case 3", () => {
    const result = maxConsecutiveOnes([0, 0, 0]);
    expect(result).toEqual(0);
  });
});
