import { DynamicArray } from "./dynamic-array";

describe("Dynamic Array Tests", () => {
  let dynamicArray: DynamicArray<number>;
  const capacity = 2;

  beforeEach(() => {
    dynamicArray = new DynamicArray<number>(capacity);
  });

  describe("insertEnd()", () => {
    test("insert values at the end of an empty array", () => {
      dynamicArray.insertEnd(1);
      dynamicArray.insertEnd(2);
      expect(dynamicArray.toArray()).toEqual([1, 2]);
    });

    test("resizes when capacity is reached", () => {
      dynamicArray.insertEnd(1);
      dynamicArray.insertEnd(2);
      dynamicArray.insertEnd(3);

      expect(dynamicArray.getCapacity()).toEqual(4);
      expect(dynamicArray.getLength()).toEqual(3);
    });
  });

  describe("removeEnd()", () => {
    test("return undefined when removing from empty array", () => {
      expect(dynamicArray.removeEnd()).toBeUndefined();
    });

    test("remove value from the end of the array", () => {
      dynamicArray.insertEnd(1);
      dynamicArray.insertEnd(2);
      expect(dynamicArray.removeEnd()).toEqual(2);
      expect(dynamicArray.toArray()).toEqual([1]);
    });
  });

  describe("insertAt()", () => {
    test("throw error when index is out of bounds (< 0)", () => {
      expect(() => dynamicArray.insertAt(-1, 10)).toThrow(
        "Index out of bounds."
      );
    });

    test("throw error when index is out of bounds (>= length)", () => {
      expect(() => dynamicArray.insertAt(5, 10)).toThrow(
        "Index out of bounds."
      );
    });

    test("insert value at middle index", () => {
      dynamicArray.insertEnd(1);
      dynamicArray.insertEnd(3);
      dynamicArray.insertAt(1, 2);
      expect(dynamicArray.toArray()).toEqual([1, 2, 3]);
    });

    test("resize when inserting at full capacity", () => {
      dynamicArray.insertEnd(1);
      dynamicArray.insertEnd(2);
      dynamicArray.insertAt(1, 5);

      expect(dynamicArray.getCapacity()).toEqual(4);
      expect(dynamicArray.getLength()).toEqual(3);
    });
  });

  describe("removeAt()", () => {
    test("throw error when index is out of bounds (< 0)", () => {
      expect(() => dynamicArray.removeAt(-1)).toThrow("Index out of bounds.");
    });

    test("throw error when index is out of bounds (>= length)", () => {
      dynamicArray.insertEnd(1);
      expect(() => dynamicArray.removeAt(2)).toThrow("Index out of bounds.");
    });

    test("remove element at given index", () => {
      dynamicArray.insertEnd(1);
      dynamicArray.insertEnd(2);
      dynamicArray.insertEnd(3);
      expect(dynamicArray.removeAt(1)).toEqual(2);
      expect(dynamicArray.toArray()).toEqual([1, 3]);
    });
  });

  describe("toArray()", () => {
    test("return empty array when no elements added", () => {
      expect(dynamicArray.toArray()).toEqual([]);
    });

    test("return correct array after insertions", () => {
      dynamicArray.insertEnd(10);
      dynamicArray.insertEnd(20);
      dynamicArray.insertEnd(30);
      expect(dynamicArray.toArray()).toEqual([10, 20, 30]);
    });

    test("return correct array after insertions and removals", () => {
      dynamicArray.insertEnd(1);
      dynamicArray.insertEnd(2);
      dynamicArray.insertEnd(3);
      dynamicArray.removeAt(1);
      expect(dynamicArray.toArray()).toEqual([1, 3]);
    });
  });
});
