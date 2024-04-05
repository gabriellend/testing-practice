import { reverseString } from "./reverseString.js";

describe("reverseString", () => {
  test("is defined", () => {
    expect(reverseString).toBeDefined();
  });
  test("returns a string if passed a string", () => {
    expect(typeof reverseString("hello")).toBe("string");
    expect(typeof reverseString("{}")).toBe("string");
  });
  test("returns the input string reversed, even if it contains leading whitespace", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("abc&23")).toBe("32&cba");
    expect(reverseString(" goodbye")).toBe("eybdoog");
  });
  test("returns the input if not a valid string", () => {
    expect(reverseString(4)).toBe(4);
    expect(reverseString("4")).toBe("4");
    expect(reverseString("")).toBe("");
    expect(reverseString(" ")).toBe(" ");
    expect(reverseString(["hello"])).toStrictEqual(["hello"]);
    expect(reverseString({})).toStrictEqual({});
    expect(reverseString(true)).toBe(true);
    expect(reverseString(null)).toBe(null);
    expect(reverseString(undefined)).toBe(undefined);
  });
});
