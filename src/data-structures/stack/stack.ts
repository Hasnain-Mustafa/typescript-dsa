export class Stack<T> {
  private readonly stack: T[];
  private length: number;

  constructor() {
    this.stack = [];
    this.length = 0;
  }

  peek(): T {
    return this.stack[this.length - 1];
  }

  push(value: T) {
    this.stack[this.length] = value;
    this.length += 1;
  }

  pop(): T {
    const removedValue = this.stack[this.length - 1];
    this.length -= 1;

    return removedValue;
  }

  getLength(): number {
    return this.length;
  }
}
