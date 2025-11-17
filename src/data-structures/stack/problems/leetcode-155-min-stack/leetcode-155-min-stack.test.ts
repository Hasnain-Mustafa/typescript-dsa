import { MinStack } from "./leetcode-155-min-stack";

describe("Leetcode 155 - MinStack", () => {
  let stack: MinStack;

  beforeEach(() => {
    stack = new MinStack();
  });

  test("case 1", () => {
    //Values -2, 0, -3

    stack.push(-2);
    stack.push(0);
    stack.push(-3);

    expect(stack.getMin()).toEqual(-3);

    expect(stack.pop());
    expect(stack.top()).toEqual(0);
    expect(stack.getMin()).toEqual(-2);
  });

  test("case 2", () => {
    //Values 1, 2, 0

    stack.push(1);
    stack.push(2);
    stack.push(0);

    expect(stack.getMin()).toEqual(0);

    expect(stack.pop());
    expect(stack.top()).toEqual(2);
    expect(stack.getMin()).toEqual(1);
  });

  test("case 3", () => {
    //Values 5, 2, 2

    stack.push(5);
    stack.push(2);
    stack.push(2);

    expect(stack.getMin()).toEqual(2);

    expect(stack.pop());
    expect(stack.top()).toEqual(2);
    expect(stack.getMin()).toEqual(2);
  });
});
