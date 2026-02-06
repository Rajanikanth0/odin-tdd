const shiftChar = (char, key) => {
  const code = char.charCodeAt(0);
  
  if (code >= 65 && code <= 90) {
    return String.fromCharCode(((code - 65 + key + 26) % 26) + 65);
  }
  if (code >= 97 && code <= 122) {
    return String.fromCharCode(((code - 97 + key + 26) % 26) + 97);
  }
  
  return char;
}

const caesarCipher = (str, key) => {
  return str.split("").map(char => shiftChar(char, key)).join("");
};

export default caesarCipher;