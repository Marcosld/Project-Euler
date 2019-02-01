const {
  getSumOfColumn,
  getDiffOfSquares,
  letsGoIterative
} = require('./index')

describe('getSumOfColumn', () => {
  test('should return 2 for 1', () => {
    expect(getSumOfColumn(1)).toEqual(2)
  })
  test('should return 9 for 2', () => {
    expect(getSumOfColumn(2)).toEqual(9)
  })
  test('should return 22 for 3', () => {
    expect(getSumOfColumn(3)).toEqual(24)
  })
})

describe('getDiffOfSquares', () => {
  test('should return 22 for 3', () => {
    expect(getDiffOfSquares(3)).toEqual(22)
  })
  test('should return 2640 for 10', () => {
    expect(getDiffOfSquares(10)).toEqual(2640)
  })
  test('should return 25164150 for 100', () => {
    expect(getDiffOfSquares(100)).toEqual(25164150)
  })
})


describe('letsGoIterative', () => {
  test('should return 22 for 3', () => {
    expect(letsGoIterative(3)).toEqual(22)
  })
  test('should return 2640 for 10', () => {
    expect(letsGoIterative(10)).toEqual(2640)
  })
  test('should return 25164150 for 100', () => {
    expect(letsGoIterative(100)).toEqual(25164150)
  })
  test('should return 25000166664166650000 for 100000', () => {
    expect(letsGoIterative(100000)).toEqual(25000166664166650000)
  })
})