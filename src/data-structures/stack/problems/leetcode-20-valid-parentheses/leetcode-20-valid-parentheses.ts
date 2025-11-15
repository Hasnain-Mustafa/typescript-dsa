export function isValidParentheses(str: string): boolean {
  const stack: string[] = [];

  for (const char of str) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      const top = stack.pop();

      if (
        !top ||
        (char === ")" && top !== "(") ||
        (char === "}" && top !== "{") ||
        (char === "]" && top !== "[")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
