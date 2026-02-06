import analyze from "../modules/analyzeArray.js";

const invalidInputs = [null, undefined, "string", 7];
const invalidItems = [null, undefined, "string"];

describe("throw error on invalid inputs", () => {
  test.each(invalidInputs)("invalid input: %s", input => {
    expect(() => analyze(input)).toThrow("Input must be an Array");
  })
});

test("throw error on empty array", () => {
  expect(() => analyze([])).toThrow("Array cannot be empty");
});

describe("throw error on invalid items", () => {
  test.each(invalidItems)("invalid item: %s", item => {
    expect(() => analyze([item])).toThrow("Array must contain only numbers");
  })
});

test("analyze an array of digits", () => {
  expect(analyze([1, 2, 3, 4])).toEqual({
    average: 2.5,
    min: 1,
    max: 4,
    length: 4
  });
});