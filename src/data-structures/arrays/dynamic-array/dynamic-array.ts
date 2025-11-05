export class DynamicArray<T> {
  private arr: T[];
  private capacity: number;
  private length: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.length = 0;
    this.arr = new Array(capacity);
  }

  private resize() {
    this.capacity = 2 * this.capacity;
    const newArray = new Array(this.capacity);

    //Copy existing array elements to new array
    for (let i = 0; i < this.length; i++) {
      newArray[i] = this.arr[i];
    }

    this.arr = newArray;
  }

  insertEnd(value: T): void {
    if (this.length >= this.capacity) {
      this.resize();
    }

    this.arr[this.length] = value;
    this.length += 1;
  }

  removeEnd(): T | undefined {
    if (this.length === 0) {
      return;
    }

    const lastIndex = this.length - 1;
    const removedValue = this.arr[lastIndex];
    // biome-ignore lint/suspicious/noExplicitAny: clearing freed slot intentionally
    this.arr[lastIndex] = undefined as any;

    this.length -= 1;
    return removedValue;
  }

  insertAt(index: number, value: T) {
    if (this.length >= this.capacity) {
      this.resize();
    }

    if (index < 0 || index >= this.length) {
      throw new Error("Index out of bounds.");
    }

    for (let i = this.length - 1; i >= index; i--) {
      this.arr[i + 1] = this.arr[i];
    }

    this.arr[index] = value;
    this.length += 1;
  }

  removeAt(index: number): T | undefined {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of bounds.");
    }

    const removedValue = this.arr[index];

    for (let i = index + 1; i < this.length; i++) {
      this.arr[i - 1] = this.arr[i];
    }

    this.length -= 1;

    // biome-ignore lint/suspicious/noExplicitAny: clearing freed slot intentionally
    this.arr[this.length] = undefined as any;

    return removedValue;
  }

  getCapacity(): number {
    return this.capacity;
  }

  getLength(): number {
    return this.length;
  }

  toArray(): T[] {
    return this.arr.slice(0, this.length);
  }
}
