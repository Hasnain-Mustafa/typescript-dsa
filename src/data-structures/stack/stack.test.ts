import { Stack } from "./stack";

describe("Stack", () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  describe("push()", () => {
    test("push values to stack", () => {
      stack.push(1);
      stack.push(2);

      expect(stack.getLength()).toEqual(2);
    });
  });

  describe("pop()", () => {
    test("pop values from stack", () => {
      stack.push(1);
      stack.push(2);

      expect(stack.pop()).toEqual(2);
      expect(stack.pop()).toEqual(1);

      expect(stack.getLength()).toEqual(0);
    });
  });

  describe("peek()", () => {
    test("peek value at top of the stack", () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.peek()).toEqual(3);
    });
  });
});
