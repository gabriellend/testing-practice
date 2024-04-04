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
  divide: function (a, b) {
    if (isNaN(parseFloat(a)) || isNaN(parseFloat(b))) {
      throw TypeError("Parameters must be numbers or numeric strings");
    }

    return this.checkForNegZero(a) / this.checkForNegZero(b);
  },
  checkForNegZero: (val) => {
    return val === -0 || val === "-0" ? val : parseFloat(val);
  },
  multiply: function (a, b) {
    if (isNaN(parseFloat(a)) || isNaN(parseFloat(b))) {
      throw TypeError("Parameters must be numbers or numeric strings");
    }

    return parseFloat(a) * parseFloat(b);
  },
};
