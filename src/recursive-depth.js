const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  //посчитать скобки
  calculateDepth(array) {
    let countArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].constructor === Array) {
        let count = this.calculateDepth(array[i]);
        countArray.push(count + 1);
      }
    }
    let max = Math.max.apply(null, countArray);
    if (max === -Infinity) {
      return 1;
    }
    return max;
  }
};