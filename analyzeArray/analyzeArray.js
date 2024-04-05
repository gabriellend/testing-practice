export const analyzeArray = (array) => {
  validate(array);

  return {
    average: calcAverage(array),
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
};

const calcAverage = (array) => {
  let sum = 0;
  for (let num of array) {
    sum += Number(num);
  }

  return sum / array.length;
};

const stringifyArray = (array) => {
  return "[" + array.map((elem) => stringifyElement(elem)).join(", ") + "]";
};

const stringifyElement = (elem) => {
  return elem === undefined ? "undefined" : JSON.stringify(elem);
};

const validate = (array) => {
  const containsNonNumericValues = array.some((elem) => isNaN(parseInt(elem)));
  if (containsNonNumericValues || array.length === 0) {
    throw TypeError(
      `Input must contain numbers or numeric strings: ${stringifyArray(array)}`
    );
  }
};
