class ListNode<T> {
  data: T;
  next: ListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList<T> {
  private head: ListNode<T> | null;
  private tail: ListNode<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertLast(val: T) {
    const newNode = new ListNode<T>(val);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = this.head;

      this.size += 1;
      return;
    }

    this.tail!.next = newNode;
    this.tail = newNode;
    this.size += 1;
  }

  insertFirst(val: T) {
    if (!this.head) {
      this.head = new ListNode<T>(val);
      this.tail = this.head;

      this.size += 1;
      return;
    }

    const newNode = new ListNode<T>(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size += 1;
  }

  insertAt(val: T, index: number) {
    if (index < 0 || index > this.size) {
      throw new Error("Index out of bounds");
    }

    const newNode = new ListNode<T>(val);

    if (index === 0) {
      this.insertFirst(val);
      return;
    }

    if (index === this.size) {
      this.insertLast(val);
      return;
    }

    let curr = this.head!;
    let i = 0;

    while (i < index - 1 && curr.next !== null) {
      curr = curr.next;
      i += 1;
    }

    newNode.next = curr.next;
    curr.next = newNode;

    this.size += 1;
  }

  removeFirst(): T | undefined {
    if (this.isEmpty()) {
      return;
    }

    const removedNode = this.head!;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      this.size -= 1;
      return removedNode.data;
    }

    this.head = removedNode.next;

    this.size -= 1;
    return removedNode.data;
  }

  removeLast(): T | undefined {
    if (this.isEmpty()) {
      return;
    }

    const removedNode = this.tail!;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      this.size -= 1;
      return removedNode.data;
    }

    let curr = this.head!;

    while (curr.next && curr.next !== this.tail) {
      curr = curr.next;
    }

    curr.next = null;
    this.tail = curr;

    this.size -= 1;
    return removedNode.data;
  }

  removeAt(index: number): T | undefined {
    if (this.isEmpty()) {
      return;
    }

    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds");
    }

    let removedNode: ListNode<T> | null = null;

    if (index === 0) {
      return this.removeFirst();
    }

    if (index === this.size - 1) {
      return this.removeLast();
    }

    let i = 0;
    let curr = this.head!;

    while (i < index - 1 && curr.next !== null) {
      curr = curr.next;
      i += 1;
    }

    removedNode = curr.next!;
    curr.next = removedNode.next;

    this.size -= 1;
    return removedNode.data;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize(): number {
    return this.size;
  }
}
