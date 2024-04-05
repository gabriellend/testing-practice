export const caesarCipher = (string, shiftDegree) => {
  if (shiftDegree === 0 || shiftDegree === "0") {
    return string;
  } else {
    validateInput(string, shiftDegree);
  }

  return encodeString(string, shiftDegree);
};

const validateInput = (string, shiftDegree) => {
  if (typeof string !== "string") {
    throw TypeError("Input type must be a string");
  } else if (!shiftDegree) {
    throw TypeError("Shift degree must be defined and non-null");
  }
};

const shiftCharacter = (char, charCode, shiftDegree) => {
  if (char >= "a" && char <= "z") {
    return ((charCode - 97 + Number(shiftDegree)) % 26) + 97;
  } else if (char >= "A" && char <= "Z") {
    return ((charCode - 65 + Number(shiftDegree)) % 26) + 65;
  } else {
    return charCode + Number(shiftDegree);
  }
};

const encodeString = (string, shiftDegree) => {
  let encoded = "";

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const charCode = string.charCodeAt(i);
    const shiftedCharCode = shiftCharacter(char, charCode, shiftDegree);

    encoded += String.fromCharCode(shiftedCharCode);
  }

  return encoded;
};
