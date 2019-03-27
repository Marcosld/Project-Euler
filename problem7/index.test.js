const {
  isPrime,
  getPrimeN
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

describe('getPrimeN', () => {
  test('should return 13 for 6', () => {
    expect(getPrimeN(6)).toEqual(13)
  })
  test('should return 47 for 15', () => {
    expect(getPrimeN(15)).toEqual(47)
  })
  test('should return 7919 for 1000', () => {
    expect(getPrimeN(1000)).toEqual(7919)
  })
  test('should return 104743 for 10001', () => {
    expect(getPrimeN(10001)).toEqual(104743)
  })
})
