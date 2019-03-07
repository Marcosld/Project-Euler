const {
    isMultPalindrome,
    nextXYSameDigits,
    getMultPalSameDigits
} = require('./index')

describe('isMultPalindrome', () => {
    test('should return true for 2, 3', () => {
        expect(isMultPalindrome(2, 3)).toBe(true)
    })
    test('should return false for 2, 7', () => {
        expect(isMultPalindrome(2, 7)).toBe(false)
    })
    test('should return true for 91, 99', () => {
        expect(isMultPalindrome(91, 99)).toBe(true)
    })
})

describe('nextXYSameDigits', () => {
    test('should return 99, 98 for 99, 99', () => {
        expect(nextXYSameDigits(99, 99)).toEqual([99, 98])
    })
    test('should return 93, 93 for 93, 10', () => {
        expect(nextXYSameDigits(93, 10)).toEqual([92, 92])
    })
    test('should return 93, 10 for 93, 11', () => {
        expect(nextXYSameDigits(93, 11)).toEqual([93, 10])
    })
    test('should return null for 10, 10', () => {
        expect(nextXYSameDigits(10, 10)).toEqual([null, null])
    })
    test('should return 10, 10 for 11, 10', () => {
        expect(nextXYSameDigits(11, 10)).toEqual([10, 10])
    })
})

describe('getMultPalSameDigits', () => {
    test('should return 9009 for 99', () => {
        expect(getMultPalSameDigits(99)).toEqual(9009)
    })
    test('should return 9 for 9', () => {
        expect(getMultPalSameDigits(9)).toEqual(9)
    })
    test('should return 580085 for 999', () => {
        expect(getMultPalSameDigits(999)).toEqual(906609)
    })
})