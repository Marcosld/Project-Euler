const {
  getBiggestProduct
} = require('./index')

describe('getBiggestProduct', () => {
  test('should return 99 for 1', () => {
    expect(getBiggestProduct(1)).toEqual(99)
  })
  test('should return 9306 for 2', () => {
    expect(getBiggestProduct(2)).toEqual(9306)
  })
  test('should return 70600674 for 4', () => {
    expect(getBiggestProduct(4)).toEqual(70600674)
  })
})
