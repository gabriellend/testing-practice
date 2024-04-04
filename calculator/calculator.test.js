import { Calculator } from "./calculator.js";

describe("calculator functionality", () => {
  xdescribe("add", () => {
    test("is defined", () => {
      expect(Calculator.add).toBeDefined();
    });
    test("returns a number", () => {
      expect(typeof Calculator.add(1, 2)).toBe("number");
    });
    test("adds the two arguments correctly, even if one is a numeric string", () => {
      expect(Calculator.add("4", 2)).toBe(6);
      expect(Calculator.add(10, 5)).toBe(15);
      expect(Calculator.add(0, 0)).toBe(0);
      expect(Calculator.add(-10, -6)).toBe(-16);
      expect(Calculator.add(-5, 10)).toBe(5);
      expect(Calculator.add(4, "2.25")).toBe(6.25);
    });
    test("throws an error if the input is not a number or numeric string", () => {
      expect(() => Calculator.add(1, undefined)).toThrow(TypeError);
      expect(() => Calculator.add(null, 2)).toThrow();
      expect(() => Calculator.add("hello", 2)).toThrow(TypeError);
      expect(() => Calculator.add(true, 2)).toThrow(TypeError);
      expect(() => Calculator.add({}, 2)).toThrow(TypeError);
    });
  });

  describe("subtract", () => {
    test("is defined", () => {
      expect(Calculator.subtract).toBeDefined();
    });
    test("returns a number", () => {
      expect(typeof Calculator.subtract(1, 2)).toBe("number");
    });
    test("subtracts the two arguments correctly, even if one is a numeric string", () => {
      expect(Calculator.subtract("4", 2)).toBe(2);
      expect(Calculator.subtract(20, 5)).toBe(15);
      expect(Calculator.subtract(0, 0)).toBe(0);
      expect(Calculator.subtract(0, 10)).toBe(-10);
      expect(Calculator.subtract(-5, 10)).toBe(-15);
      expect(Calculator.subtract(4, "2.25")).toBe(1.75);
    });
    test("throws an error if the input is not a number or numeric string", () => {
      expect(() => Calculator.subtract("hello", 2)).toThrow(TypeError);
      expect(() => Calculator.subtract(true, 2)).toThrow(TypeError);
      expect(() => Calculator.subtract({}, 2)).toThrow(TypeError);
      expect(() => Calculator.subtract(undefined, 2)).toThrow();
      expect(() => Calculator.subtract(1, null)).toThrow();
    });
  });

  xdescribe("divide", () => {
    test("is defined", () => {
      expect(Calculator.divide).toBeDefined();
    });
  });

  xdescribe("multiply", () => {
    test("is defined", () => {
      expect(Calculator.multiply).toBeDefined();
    });
  });
});
