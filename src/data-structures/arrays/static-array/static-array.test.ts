import { StaticArray } from "./static-array";

describe("Static Array Tests", () => {
  let staticArray: StaticArray<number>;
  const capacity = 5;

  beforeEach(() => {
    staticArray = new StaticArray<number>(capacity, 0);
  });

  describe("insertEnd()", () => {
    test("insert values at the end of an empty array", () => {
      staticArray.insertEnd(1);
      staticArray.insertEnd(2);

      expect(staticArray.getLength()).toEqual(2);
    });
    test("throw error when insertion performed on full array", () => {
      staticArray.insertEnd(1);
      staticArray.insertEnd(2);
      staticArray.insertEnd(3);
      staticArray.insertEnd(4);
      staticArray.insertEnd(5);

      expect(() => staticArray.insertEnd(6)).toThrow("Array is already full.");
    });
  });

  describe("removeEnd()", () => {
    test("throw error when removal performed on an empty array", () => {
      expect(staticArray.getLength()).toEqual(0);
      expect(staticArray.removeEnd()).toBeUndefined();
    });
    test("remove value from the end of the array", () => {
      staticArray.insertEnd(1);
      staticArray.insertEnd(2);

      expect(staticArray.removeEnd()).toEqual(2);
      expect(staticArray.getLength()).toEqual(1);
      expect(staticArray.removeEnd()).toEqual(1);
      expect(staticArray.getLength()).toEqual(0);
    });
  });

  describe("insertAt()", () => {
    test("throw error when index is out of bounds ( < 0)", () => {
      expect(() => staticArray.insertAt(-1, 6)).toThrow("Index out of bounds.");
    });
    test("throw error when index is out of bounds ( capacity >= )", () => {
      expect(() => staticArray.insertAt(5, 6)).toThrow("Index out of bounds.");
    });

    test("throw error when array is already full", () => {
      staticArray.insertAt(0, 1);
      staticArray.insertAt(1, 2);
      staticArray.insertAt(2, 3);
      staticArray.insertAt(3, 4);
      staticArray.insertAt(4, 5);

      expect(staticArray.getLength()).toBe(5);

      expect(() => staticArray.insertAt(5, 6)).toThrow(
        "Array is already full."
      );
    });

    test("insert element in the middle of the array", () => {
      staticArray.insertAt(0, 1);
      staticArray.insertAt(1, 3);
      staticArray.insertAt(2, 4);
      staticArray.insertAt(3, 5);

      staticArray.insertAt(1, 2);
    });
  });

  describe("removeAt()", () => {
    test("throw error when index is out of bounds ( < 0)", () => {
      expect(() => staticArray.removeAt(-1)).toThrow("Index out of bounds.");
    });

    test("throw error when index is out of bounds ( capacity >= )", () => {
      expect(() => staticArray.insertAt(5, 6)).toThrow("Index out of bounds.");
    });

    test("remove elements from the array", () => {
      staticArray.insertAt(0, 1);
      staticArray.insertAt(1, 2);
      staticArray.insertAt(2, 3);
      staticArray.insertAt(3, 4);
      staticArray.insertAt(4, 5);

      staticArray.removeAt(0);
      staticArray.removeAt(1);
      staticArray.removeAt(2);
      staticArray.removeAt(3);
      staticArray.removeAt(4);

      expect(staticArray.getLength()).toBe(0);
    });
  });

  describe("get()", () => {
    test("throw error when index is out of bounds ( < 0)", () => {
      expect(() => staticArray.get(-1)).toThrow("Index out of bounds.");
    });

    test("throw error when index is out of bounds ( capacity >= )", () => {
      expect(() => staticArray.get(5)).toThrow("Index out of bounds.");
    });

    test("get from the array at the given index", () => {
      staticArray.insertAt(0, 1);
      staticArray.insertAt(1, 2);
      staticArray.insertAt(2, 3);
      staticArray.insertAt(3, 4);
      staticArray.insertAt(4, 5);

      expect(staticArray.get(4)).toEqual(5);
    });
  });
  describe("set()", () => {
    test("throw error when index is out of bounds ( < 0)", () => {
      expect(() => staticArray.set(-1, 1)).toThrow("Index out of bounds.");
    });

    test("throw error when index is out of bounds ( capacity >= )", () => {
      expect(() => staticArray.set(5, 1)).toThrow("Index out of bounds.");
    });

    test("set new value at the given index", () => {
      staticArray.insertAt(0, 1);
      staticArray.insertAt(1, 2);
      staticArray.insertAt(2, 3);
      staticArray.insertAt(3, 4);
      staticArray.insertAt(4, 5);

      staticArray.set(4, 6);

      expect(staticArray.get(4)).toEqual(6);
    });
  });

  describe("toArray()", () => {
    test("returns empty array when no elements added", () => {
      expect(staticArray.toArray()).toEqual([]);
      expect(staticArray.toArray().length).toBe(0);
    });

    test("returns correct array after insertEnd operations", () => {
      staticArray.insertEnd(10);
      staticArray.insertEnd(20);
      staticArray.insertEnd(30);

      expect(staticArray.toArray()).toEqual([10, 20, 30]);
    });
  });
});
