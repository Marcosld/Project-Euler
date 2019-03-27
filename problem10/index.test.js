const {
  isPrime,
  getPrimeSumN
} = require('./index')
const Lazy = require('lazy.js')

describe('isPrime', () => {
  test('should return true for 2', () => {
    expect(isPrime(2)).toEqual(true)
  })
  test('should return true for 11', () => {
    expect(isPrime(11)).toEqual(true)
  })
  test('should return true for 47', () => {
    expect(isPrime(47)).toEqual(true)
  })
  test('should return false for 46', () => {
    expect(isPrime(46)).toEqual(false)
  })
  test('should return true for 7919', () => {
    expect(isPrime(7919)).toEqual(true)
  })
  test('should return false for 7917', () => {
    expect(isPrime(7917)).toEqual(false)
  })
})

describe('getPrimeSumN', () => {
  test('should return 13 for 6', () => {
    expect(getPrimeSumN(10)).toEqual(17)
  })
  test('should return 104743 for 2000000', () => {
    expect(getPrimeSumN(2000000)).toEqual(142913828922)
  })
})
