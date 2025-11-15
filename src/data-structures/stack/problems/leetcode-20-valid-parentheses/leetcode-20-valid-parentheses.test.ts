import { isValidParentheses } from "./leetcode-20-valid-parentheses";

describe("Leetcode 20 - Valid Parenthesis", () => {
  test("case 1", () => {
    const result = isValidParentheses("()");
    expect(result).toEqual(true);
  });

  test("case 2", () => {
    const result = isValidParentheses("()[]{}");
    expect(result).toEqual(true);
  });

  test("case 3", () => {
    const result = isValidParentheses("(]");
    expect(result).toEqual(false);
  });

  test("case 4", () => {
    const result = isValidParentheses("([])");
    expect(result).toEqual(true);
  });

  test("case 5", () => {
    const result = isValidParentheses("([)]");
    expect(result).toEqual(false);
  });
});
