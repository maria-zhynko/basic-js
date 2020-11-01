const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  chain: "",
  getLength() {
    return this.arr.length();
  },
  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!this.arr[position - 1] || !Number.isInteger(position)) {
      this.arr.length = 0;
      throw new CustomError();
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    this.chain = this.arr.join("~~");
    this.arr.length = 0;
    return this.chain;
  },
};

module.exports = chainMaker;
