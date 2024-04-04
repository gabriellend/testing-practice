export const Calculator = {
  add: (a, b) => {
    if (isNaN(parseInt(a)) || isNaN(parseInt(b))) {
      throw TypeError("Parameters must be numbers or numeric strings");
    }

    return parseFloat(a) + parseFloat(b);
  },
  subtract: (a, b) => {
    if (isNaN(parseFloat(a)) || isNaN(parseFloat(b))) {
      throw TypeError("Parameters must be numbers or numeric strings");
    }

    return parseFloat(a) - parseFloat(b);
  },
};
