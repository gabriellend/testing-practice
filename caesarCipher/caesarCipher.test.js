import { caesarCipher } from "./caesarCipher.js";

describe("caesarCipher", () => {
  test("is defined", () => {
    expect(caesarCipher).toBeDefined();
  });
  test("returns a string", () => {
    expect(typeof caesarCipher("hello", 2)).toBe("string");
  });
  test("handles letters", () => {
    expect(caesarCipher("hello", 1)).toBe("ifmmp");
    expect(caesarCipher("hello", 2)).toBe("jgnnq");
    expect(caesarCipher("m", 3)).toBe("p");
    expect(caesarCipher("123", 1)).toBe("234");
  });
  test("handles numbers", () => {
    expect(() => caesarCipher(4, 1)).toThrow(TypeError);
  });
  test("handles special characters", () => {
    expect(caesarCipher("hello!", 1)).toBe('ifmmp"');
  });
  test("handles capitalization", () => {
    expect(caesarCipher("Hello", 2)).toBe("Jgnnq");
  });
  test("handles an empty string", () => {
    expect(caesarCipher("", 5)).toBe("");
  });
  test("handles shift degree of 0", () => {
    expect(caesarCipher("hello", 0)).toBe("hello");
  });
  test("handles string shift degree", () => {
    expect(caesarCipher("hello", "2")).toBe("jgnnq");
  });
  test("handles null and undefined", () => {
    expect(() => caesarCipher("hello", null)).toThrow(TypeError);
    expect(() => caesarCipher(undefined, 4)).toThrow(TypeError);
  });
  test("handles shifting from z to a", () => {
    expect(caesarCipher("zebra", 1)).toBe("afcsb");
    expect(caesarCipher("Zebra", 1)).toBe("Afcsb");
  });
});
