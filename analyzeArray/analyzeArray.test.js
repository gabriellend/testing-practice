import { analyzeArray } from "./analyzeArray.js";

describe("caesarCipher", () => {
  const inputArray = [1, 8, 3, 4, 2, 6];
  const result = analyzeArray(inputArray);

  test("is defined", () => {
    expect(analyzeArray).toBeDefined();
  });
  test("returns an object", () => {
    expect(typeof result).toBe("object");
    expect(Array.isArray(result)).toBe(false);
  });
  test("keys include average, min, max, and length", () => {
    const keys = ["average", "min", "max", "length"];
    const correctKeysExist = keys.every((key) => result.hasOwnProperty(key));

    expect(correctKeysExist).toBe(true);
  });
  test("returns correct average", () => {
    expect(result.average).toBe(4);
  });
  test("returns correct min", () => {
    expect(result.min).toBe(1);
  });
  test("returns correct max", () => {
    expect(result.max).toBe(8);
  });
  test("returns correct length", () => {
    expect(result.length).toBe(inputArray.length);
  });
  test("handles numeric strings", () => {
    const stringInputArray = ["1", "-8", "3", "4", "-2", "6"];
    const result = analyzeArray(stringInputArray);
    expect(result.average).toBeCloseTo(0.6667);
    expect(result.min).toBe(-8);
    expect(result.max).toBe(6);
    expect(result.length).toBe(stringInputArray.length);
  });
  test("handles non-numeric values", () => {
    const invalidInputArray = ["hello", 2, null, undefined, "", []];
    expect(() => analyzeArray(invalidInputArray)).toThrow(TypeError);
  });
  test("handles an empty array", () => {
    expect(() => analyzeArray([])).toThrow(TypeError);
  });
});
