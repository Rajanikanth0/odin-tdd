import reverseString from "../modules/reverseString.js";

const invalids = ["", null, 2, undefined];

describe("returns empty string", () => {
  invalids.forEach(input => {
    test(`invalid: ${JSON.stringify(input)}`, () => {
      expect(reverseString(input)).toBe("");
    });
  });
});

test("reverse a character", () => {
  expect(reverseString("a")).toBe("a");
});

test("reverse a word string", () => {
  expect(reverseString("apple")).toBe("elppa");
});

test("reverse multi-word string", () => {
  expect(reverseString("apple juice")).toBe("eciuj elppa");
});