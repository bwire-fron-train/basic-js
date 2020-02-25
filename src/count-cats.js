module.exports = function countCats(matrix) {
  return matrix.reduce((sum, row) => sum + row.reduce((srow, e) => (e === '^^') ? ++srow : srow, 0), 0);
};