const validate = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("invalid input");
  }
}

const calculator = {
  add(a, b) {
    validate(a, b);
    return a+b;
  },
  sub(a, b) {
    validate(a, b);
    return a-b;
  },
  mul(a, b) {
    validate(a, b);
    return a*b;
  },
  div(a, b) {
    validate(a, b);
    if (b == 0) throw new Error("division by zero");
    return a/b;
  },
};

export default calculator;