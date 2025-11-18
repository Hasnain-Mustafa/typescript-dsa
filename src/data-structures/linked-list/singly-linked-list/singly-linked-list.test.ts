import { LinkedList } from "./singly-linked-list";

describe("LinkedList", () => {
  let list: LinkedList<number>;

  beforeEach(() => {
    list = new LinkedList<number>();
  });

  describe("insertFirst()", () => {
    test("inserts values at the beginning", () => {
      list.insertFirst(1);
      list.insertFirst(2);

      expect(list.getSize()).toEqual(2);
    });
  });

  describe("insertLast()", () => {
    test("inserts values at the end", () => {
      list.insertLast(1);
      list.insertLast(2);

      expect(list.getSize()).toEqual(2);
    });
  });

  describe("insertAt()", () => {
    test("throws error for negative index", () => {
      expect(() => list.insertAt(1, -1)).toThrow("Index out of bounds");
    });

    test("throws error for index greater than size", () => {
      expect(() => list.insertAt(1, list.getSize() + 1)).toThrow(
        "Index out of bounds"
      );
    });

    test("inserts value at middle index", () => {
      list.insertLast(1);
      list.insertLast(3);
      list.insertLast(4);
      list.insertLast(5);
      list.insertAt(2, 2);

      expect(list.getSize()).toEqual(5);
    });

    test("inserts value at index 0 (prepend)", () => {
      list.insertAt(1, 0);

      expect(list.getSize()).toEqual(1);
    });

    test("inserts value at index equal to size (append)", () => {
      list.insertLast(1);
      list.insertAt(2, 1);

      expect(list.getSize()).toEqual(2);
    });
  });

  describe("removeFirst()", () => {
    test("returns undefined when list is empty", () => {
      expect(list.removeFirst()).toBeUndefined();
    });

    test("removes the only element in the list", () => {
      list.insertLast(1);

      const removed = list.removeFirst();
      expect(removed).toEqual(1);
      expect(list.getSize()).toEqual(0);
    });

    test("removes the first element", () => {
      list.insertLast(1);
      list.insertLast(2);

      const removed = list.removeFirst();
      expect(removed).toEqual(1);
      expect(list.getSize()).toEqual(1);
    });
  });

  describe("removeLast()", () => {
    test("returns undefined when list is empty", () => {
      expect(list.removeLast()).toBeUndefined();
    });

    test("removes the only element in the list", () => {
      list.insertLast(1);

      const removed = list.removeLast();
      expect(removed).toEqual(1);
      expect(list.getSize()).toEqual(0);
    });

    test("removes the last element", () => {
      list.insertLast(1);
      list.insertLast(2);
      list.insertLast(3);
      list.insertLast(4);

      const removed = list.removeLast();
      expect(removed).toEqual(4);
      expect(list.getSize()).toEqual(3);
    });
  });

  describe("removeAt()", () => {
    test("returns undefined when list is empty", () => {
      expect(list.removeAt(-1)).toBeUndefined();
    });
    test("throws error for negative index", () => {
      list.insertLast(1);
      expect(() => list.removeAt(-1)).toThrow("Index out of bounds");
    });

    test("throws error for index greater than size", () => {
      list.insertLast(1);
      expect(() => list.removeAt(list.getSize() + 1)).toThrow(
        "Index out of bounds"
      );
    });
    test("removes element at a middle index", () => {
      list.insertLast(1);
      list.insertLast(2);
      list.insertLast(3);
      list.insertLast(4);

      const removed = list.removeAt(2);
      expect(removed).toEqual(3);
      expect(list.getSize()).toEqual(3);
    });

    test("removes first element using removeAt", () => {
      list.insertLast(1);
      list.insertLast(2);

      const removed = list.removeAt(0);
      expect(removed).toEqual(1);
      expect(list.getSize()).toEqual(1);
    });

    test("removes last element using removeAt", () => {
      list.insertLast(1);
      list.insertLast(2);

      const removed = list.removeAt(1);
      expect(removed).toEqual(2);
      expect(list.getSize()).toEqual(1);
    });
  });
});
