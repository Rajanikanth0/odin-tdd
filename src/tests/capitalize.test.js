import capitalize from "../modules/capitalize.js";

const invalids = ["", null, 2];

describe("returns empty string", () => {
  invalids.forEach(input => {
    test(`invalid: ${JSON.stringify(input)}`, () => {
      expect(capitalize(input)).toBe("");
    });
  });
});

test("capitalize the single char", () => {
  expect(capitalize("a")).toBe("A");
});

test("capitalize first char", () => {
  expect(capitalize("apple")).toBe("Apple");
});

test("already capitalized string", () => {
  expect(capitalize("Apple")).toBe("Apple");
});

test("all uppercase string", () => {
  expect(capitalize("APPLE")).toBe("APPLE");
});

test("multi-word string", () => {
  expect(capitalize("apple juice")).toBe("Apple juice");
})