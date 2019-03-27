const {
  getProduct,
  getTopProduct
} = require('./index')

describe('getProduct', () => {
  test('should return 21 for 3, 0', () => {
    console.log()
    expect(getProduct(3, 0)).toEqual(21)
  })
  test('should return 10 for 4, 0', () => {
    expect(getProduct(4, 0)).toEqual(126)
  })
  test('should return 0 for 4, 999', () => {
    expect(getProduct(4, 999)).toEqual(0)
  })
})
describe('getTopProduct', () => {
  test('should return 5832 for 4', () => {
    expect(getTopProduct(4)).toEqual(5832)
  })
  test('should return 5832 for 4', () => {
    expect(getTopProduct(13)).toEqual(23514624000)
  })
})
