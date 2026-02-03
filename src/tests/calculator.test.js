import calculator from "../modules/calculator.js";

const methods = Object.entries(calculator);

describe("throw error on empty", () => {
  methods.forEach(function ([funName, fun]) {
    test(`empty value: ${JSON.stringify(funName)}`, () => {
      expect(() => fun()).toThrow();
    });
  });
});
