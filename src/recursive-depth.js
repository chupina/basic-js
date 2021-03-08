const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
  return Array.isArray(arr) ? (1 + Math.max(...arr.map(e => this.calculateDepth(e.length === 0 ? [1] : e)))) : 0;
      
};
};
