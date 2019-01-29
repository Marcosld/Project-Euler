const {
    isPrime,
    nextPrime,
    getLargestPrimeFactor
} = require('./index')

describe('isPrime', () => {
    test('should return true for 2', () => {
        expect(isPrime(2)).toBe(true)
    })
    test('should return true for 3', () => {
        expect(isPrime(3)).toBe(true)
    })
    test('should return true for 5', () => {
        expect(isPrime(5)).toBe(true)
    })
    test('should return false for 8', () => {
        expect(isPrime(8)).toBe(false)
    })
})

describe('nextPrime', () => {
    test('should return 2 for 1', () => {
        expect(nextPrime(1)).toBe(2)
    })
    test('should return 5 for 3', () => {
        expect(nextPrime(3)).toBe(5)
    })
    test('should return 11 for 8', () => {
        expect(nextPrime(8)).toBe(11)
    })
    test('should return 17 for 14', () => {
        expect(nextPrime(14)).toBe(17)
    })
})


describe('getLargestPrimeFactor', () => {
    test('should return 2 for 4', () => {
        expect(getLargestPrimeFactor(4)).toBe(2)
    })
    test('should return 5 for 5', () => {
        expect(getLargestPrimeFactor(5)).toBe(5)
    })
    test('should return 29 for 13195', () => {
        expect(getLargestPrimeFactor(13195)).toBe(29)
    })
    test('should return 6857 for 600851475143', () => {
        expect(getLargestPrimeFactor(600851475143)).toBe(6857)
    })
})