const {
  getAllFactors,
  normalizeFactors,
  getTriangleNumberN,
  getNumberOfDivisors,
  getTriangleMoreThanDivisors
} = require('./index')

describe('getAllFactors', () => {
  test('should return [2, 3] for 6', () => {
    expect(getAllFactors(6)).toEqual([2, 3])
  })
  test('should return [2, 2, 2] for 8', () => {
    expect(getAllFactors(8)).toEqual([2, 2, 2])
  })
  test('should return [2, 2, 2] for 8', () => {
    expect(getAllFactors(8)).toEqual([2, 2, 2])
  })
  test('should return [2, 5] for 10', () => {
    expect(getAllFactors(10)).toEqual([2, 5])
  })
})

describe('normalizeFactors', () => {
  test('should return {2: 1, 3: 1} for [2, 3]', () => {
    expect(normalizeFactors([2, 3])).toEqual({2: 1, 3: 1})
  })
  test('should return {2: 3, 3: 1} for [2, 2, 2, 3]', () => {
    expect(normalizeFactors([2, 2, 2, 3])).toEqual({2: 3, 3: 1})
  })
})

describe('getTriangleNumberN', () => {
  test('should return 6 for 3', () => {
    expect(getTriangleNumberN(3)).toEqual(6)
  })
  test('should return 10 for 4', () => {
    expect(getTriangleNumberN(4)).toEqual(10)
  })
  test('should return 28 for 7', () => {
    expect(getTriangleNumberN(7)).toEqual(28)
  })
})

describe('getNumberOfDivisors', () => {
  test('should return 4 for {2: 1, 3: 1}', () => {
    expect(getNumberOfDivisors({2: 1, 3: 1})).toEqual(4)
  })
  test('should return 6 for {2: 2, 3: 1}', () => {
    expect(getNumberOfDivisors({2: 2, 3: 1})).toEqual(6)
  })
  test('should return 6 for {2: 2, 3: 1, 5: 3}', () => {
    expect(getNumberOfDivisors({2: 2, 3: 1, 5: 3})).toEqual(24)
  })
})

describe('getTriangleMoreThanDivisors', () => {
  test('should return 6 for 3', () => {
    expect(getTriangleMoreThanDivisors(3)).toEqual(6)
  })
  test('should return 28 for 4', () => {
    expect(getTriangleMoreThanDivisors(4)).toEqual(28)
  })
  test('should return 28 for 5', () => {
    expect(getTriangleMoreThanDivisors(5)).toEqual(28)
  })
  test('should return 73920 for 100', () => {
    expect(getTriangleMoreThanDivisors(100)).toEqual(73920)
  })
  test('should return 17907120 for 400', () => {
    expect(getTriangleMoreThanDivisors(400, 384)).toEqual(17907120)
  })
  test('should return 76576500 for 500', () => {
    expect(getTriangleMoreThanDivisors(500, 5984)).toEqual(76576500)
  })
})