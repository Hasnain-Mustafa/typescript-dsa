export class StaticArray<T> {
  private readonly arr: T[];
  private readonly defaultValue: T;
  private readonly capacity: number;
  private length: number;

  constructor(capacity: number, defaultValue: T) {
    this.arr = new Array(capacity).fill(defaultValue);
    this.capacity = capacity;
    this.length = 0;
    this.defaultValue = defaultValue;
  }

  insertEnd(value: T): void {
    if (this.length >= this.capacity) {
      throw new Error("Array is already full.");
    }

    this.arr[this.length] = value; // Set value to the last index of the array
    this.length += 1; // Increase the length of the array.
  }

  removeEnd(): T | undefined {
    if (this.length === 0) {
      return;
    }

    const lastIndex = this.length - 1; // Get the index of last element
    const removedValue = this.arr[lastIndex];
    this.arr[lastIndex] = this.defaultValue; // Clear the position
    this.length -= 1; // Now decrement length
    return removedValue;
  }

  insertAt(index: number, value: T): void {
    if (this.length >= this.capacity) {
      throw new Error("Array is already full.");
    }
    if (index < 0 || index >= this.capacity) {
      throw new Error("Index out of bounds.");
    }

    //Loop through array items from the end and move elements to the right
    for (let i = this.length - 1; i >= index; i--) {
      this.arr[i + 1] = this.arr[i];
    }

    this.arr[index] = value; //Assign the value at the index
    this.length += 1; // Increment the length
  }

  removeAt(index: number): T {
    if (index < 0 || index >= this.capacity) {
      throw new Error("Index out of bounds.");
    }

    const removedValue = this.arr[index];

    // Shift elements to the left
    for (let i = index + 1; i < this.length; i++) {
      this.arr[i - 1] = this.arr[i];
    }

    this.length -= 1;
    this.arr[this.length] = this.defaultValue; // Clear the last position
    return removedValue;
  }

  get(index: number): T {
    if (index < 0 || index >= this.capacity) {
      throw new Error("Index out of bounds.");
    }
    return this.arr[index];
  }

  set(index: number, value: T): void {
    if (index < 0 || index >= this.capacity) {
      throw new Error("Index out of bounds.");
    }
    this.arr[index] = value;
  }

  getLength(): number {
    return this.length;
  }

  toArray(): T[] {
    return this.arr.slice(0, this.length);
  }
}
