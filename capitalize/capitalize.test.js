import { capitalize } from "./capitalize.js";

describe("capitalize", () => {
  test("exists", () => {
    expect(capitalize).toBeDefined();
  });

  test("returns a string if passed a string", () => {
    expect(typeof capitalize("hello")).toBe("string");
  });

  test("capitalizes the first letter of a string, even if it contains leading whitespace", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("g")).toBe("G");
    expect(capitalize(" goodbye")).toBe("Goodbye");
  });

  test("leaves the first letter unchanged if it is already capitalized", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  test("returns the input if not a valid string", () => {
    expect(capitalize(4)).toBe(4);
    expect(capitalize("4")).toBe("4");
    expect(capitalize("")).toBe("");
    expect(capitalize(["hello"])).toStrictEqual(["hello"]);
    expect(capitalize({})).toStrictEqual({});
    expect(capitalize(true)).toBe(true);
    expect(capitalize(null)).toBe(null);
    expect(capitalize(undefined)).toBe(undefined);
  });
});
