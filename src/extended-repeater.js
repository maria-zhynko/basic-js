const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options) {
  let add, res;
  if (options.separator === undefined) {
      options.separator = '+';
  }

  if (options.additionSeparator === undefined) {
      options.additionSeparator = '';
  }

  if (options.addition === undefined) {
      options.addition = '';
  }

  add = options.addition;

  for (let i = 1; i < options.additionRepeatTimes; i++) {
      add = add + options.additionSeparator + options.addition;
  }

  res = str + add;

  for (let i = 1; i < options.repeatTimes; i++) {
    res = res + options.separator + str + add;
  }
  
  return res;
};
  