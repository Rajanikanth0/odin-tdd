const analyzeArray = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an Array");
  }

  if (arr.length === 0) {
    throw new Error("Array cannot be empty");
  }

  const invalid = arr.some(item => typeof item !== "number");
  if (invalid) {
    throw new Error("Array must contain only numbers");
  }

  const sum = arr.reduce((total, item) => total + item, 0);

  return {
    average: sum / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  };
};

export default analyzeArray;