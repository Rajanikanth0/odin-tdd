import calculator from "../modules/calculator.js";

const methods = Object.entries(calculator);

const invalids = [
  ["string", "string"],
  [null, null],
  [undefined, undefined],
  [5] // single operand
];

describe("throw error on invalid", () => {
  test.each(methods)(`invalid on %s`, (funName, fun) => {
    invalids.forEach(([a, b]) => {
      expect(() => fun(a, b)).toThrow("invalid input");
    });
  });

  test("throw error on division by 0", () => {
    expect(() => calculator.div(5, 0)).toThrow("division by zero");
  });
});


const integers = [
  ["add", calculator.add, 3],
  ["sub", calculator.sub, -1],
  ["mul", calculator.mul, 2],
  ["div", calculator.div, 0.5]
];

describe("calculate with integers", () => {
  test.each(integers)("integer on %s", (funName, fun, result) => {
    expect(fun(1, 2)).toBe(result);
  })
});

const floats = [
  ["add", calculator.add, 4],
  ["sub", calculator.sub, -1],
  ["mul", calculator.mul, 3.75],
  ["div", calculator.div, 0.6]
];

describe("calculate with floats", () => {
  test.each(floats)("integer on %s", (funName, fun, result) => {
    expect(fun(1.5, 2.5)).toBe(result);
  })
});