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

  xdescribe("subtract", () => {
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

  describe("divide", () => {
    test("is defined", () => {
      expect(Calculator.divide).toBeDefined();
    });
    test("returns a number", () => {
      expect(typeof Calculator.divide(10, 2)).toBe("number");
      expect(typeof Calculator.divide(10, 3)).toBe("number");
    });
    test("handles positive numbers", () => {
      expect(Calculator.divide(20, 5)).toBe(4);
    });
    test("handles negative numbers", () => {
      expect(Calculator.divide(-4, -2)).toBe(2);
      expect(Calculator.divide(-4, 2)).toBe(-2);
      expect(Calculator.divide(4, -2)).toBe(-2);
    });
    test("handles numeric string", () => {
      expect(Calculator.divide("4", 2)).toBe(2);
      expect(Calculator.divide(8, "2")).toBe(4);
      expect(Calculator.divide("18", "3")).toBe(6);
    });
    test("handles dividing by 0", () => {
      expect(Calculator.divide(0, 0)).toBe(NaN);
      expect(Calculator.divide(5, 0)).toBe(Infinity);
      expect(Calculator.divide(3, -0)).toBe(-Infinity);
      expect(Calculator.divide(-8, 0)).toBe(-Infinity);
      expect(Calculator.divide(-67, -0)).toBe(Infinity);
    });
    test("handles dividing 0", () => {
      expect(Calculator.divide(0, 10)).toBe(0);
      expect(Calculator.divide(0, -13)).toBe(-0);
      expect(Calculator.divide(-0, 72)).toBe(-0);
      expect(Calculator.divide(-0, -59)).toBe(0);
    });
    test("handles decimals", () => {
      expect(Calculator.divide(0.1, 0.3)).toBeCloseTo(0.3333333);
      expect(Calculator.divide(4, 2.5)).toBe(1.6);
      expect(Calculator.divide(-4, 2.5)).toBe(-1.6);
      expect(Calculator.divide(4, -2.5)).toBe(-1.6);
      expect(Calculator.divide(-4, -2.5)).toBe(1.6);
    });
    test("handles extremely large numbers", () => {
      expect(Calculator.divide(1e308, 1e307)).toBe(10);
      expect(Calculator.divide(1e308, -1e307)).toBe(-10);
      expect(Calculator.divide(-1e308, 1e307)).toBe(-10);
      expect(Calculator.divide(-1e308, -1e307)).toBe(10);
    });
    test("handles infinity", () => {
      expect(Calculator.divide(Infinity, Infinity)).toBeNaN();
      expect(Calculator.divide(0, Infinity)).toBe(0);
      expect(Calculator.divide(5, Infinity)).toBe(0);
      expect(Calculator.divide(-17, Infinity)).toBe(-0);
      expect(Calculator.divide(2, -Infinity)).toBe(-0);
      expect(Calculator.divide(-5, -Infinity)).toBe(0);
      expect(Calculator.divide(5.78, Infinity)).toBe(0);
      expect(Calculator.divide(-1.33, Infinity)).toBe(-0);
      expect(Calculator.divide(Infinity, 0)).toBe(Infinity);
      expect(Calculator.divide(Infinity, 26)).toBe(Infinity);
    });
    test("throws an error if the input is not a number or numeric string", () => {
      expect(() => Calculator.divide("hello", 2)).toThrow(TypeError);
      expect(() => Calculator.divide(true, 2)).toThrow(TypeError);
      expect(() => Calculator.divide({}, 2)).toThrow(TypeError);
      expect(() => Calculator.divide(undefined, 2)).toThrow(TypeError);
      expect(() => Calculator.divide(1, null)).toThrow(TypeError);
    });
  });

  xdescribe("multiply", () => {
    test("is defined", () => {
      expect(Calculator.multiply).toBeDefined();
    });
  });
});
