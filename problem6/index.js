function letsGoIterative (n) {
  let squaresSum = 0
  let sumsSquare = 0
  for(let i = 1; i <= n; i++){
    squaresSum += i ** 2
    sumsSquare += i
  }
  sumsSquare = sumsSquare ** 2
  return sumsSquare - squaresSum
}

const getDiffOfSquares = (n, i = 1, diff = 0) =>
  i < n
    ? getDiffOfSquares(n, i + 1, diff + getSumOfColumn(i))
    : 2 * diff

const getSumOfColumn = (n, i = 1) =>
  i <= n ? (n + 1) * i + getSumOfColumn(n, i + 1) : 0

module.exports = {
  getSumOfColumn,
  getDiffOfSquares,
  letsGoIterative
}
