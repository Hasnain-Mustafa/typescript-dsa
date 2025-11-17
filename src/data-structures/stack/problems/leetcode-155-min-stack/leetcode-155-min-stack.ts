// Two stacks approach

// export class MinStack {
//   private readonly stack: number[];
//   private readonly min_stack: number[];

//   constructor() {
//     this.stack = [];
//     this.min_stack = [];
//   }

//   push(val: number): void {
//     if (this.min_stack.length === 0 || val <= this.min_stack.at(-1)!) {
//       this.min_stack.push(val);
//     } else {
//       this.min_stack.push(this.min_stack.at(-1)!);
//     }
//     this.stack.push(val);
//   }

//   pop(): void {
//     this.stack.pop();
//     this.min_stack.pop();
//   }

//   top(): number {
//     return this.stack.at(-1)!;
//   }

//   getMin(): number {
//     return this.min_stack.at(-1)!;
//   }
// }

// A cleaner approach
// Stack with Objects as { val,min } pairs

export class MinStack {
  private readonly stack: { val: number; min: number }[];

  constructor() {
    this.stack = [];
  }

  push(val: number): void {
    if (this.stack.length === 0) {
      this.stack.push({ val, min: val });
    } else {
      this.stack.push({ val, min: Math.min(val, this.stack.at(-1)!.min) });
    }
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack.at(-1)!.val;
  }

  getMin(): number {
    return this.stack.at(-1)!.min;
  }
}
