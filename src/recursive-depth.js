module.exports = class DepthCalculator {
  calculateDepth(arr) { 
    return Array.isArray(arr) 
      ? arr.length > 0 
        ? Math.max(...arr.map(e => 1 + this.calculateDepth(e))) 
        : 1 
      : 0;
  }
};