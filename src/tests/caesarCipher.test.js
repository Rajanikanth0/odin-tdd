import cipher from "../modules/caesarCipher.js";

test("check for lower-case", () => {
  expect(cipher("adc", 2)).toBe("cfe");
});

test("check for upper case", () => {
  expect(cipher("ADC", 2)).toBe("CFE");
});

test("check for symbols and other chars", () => {
  expect(cipher("@#12", 2)).toBe("@#12");
});

test("check for alpha-numeric-symbols", () => {
  expect(cipher("aA()1TAa", 2)).toBe("cC()1VCc");
});

test("check for 26th key", () => {
  expect(cipher("adc", 26)).toBe("adc");
});

test("check for 27th key", () => {
  expect(cipher("adc", 27)).toBe("bed");
});