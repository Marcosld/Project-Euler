const {
    getAllFactors,
    normalizeFactors,
    mergeFactors,
    smallestMultipleFactors,
    multiplyFactors
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

describe('mergeFactors', () => {
    test('should return {2: 3, 3: 2} for {2: 4}, {2: 3, 3: 2}', () => {
        expect(mergeFactors({2: 4}, {3: 2})).toEqual({2: 4, 3: 2})
    })
})

describe('smallestMultiple', () => {
    test('should return {2: 2, 3: 1, 5: 1} for 5', () => {
        expect(smallestMultipleFactors(5)).toEqual({2: 2, 3: 1, 5: 1})
    })
    test('should return {2: 2, 3: 1, 5: 1} for 10', () => {
        expect(smallestMultipleFactors(10)).toEqual({2: 3, 3: 2, 5: 1, 7: 1})
    })
})

describe('multiplyFactors', () => {
    test('should return 30 for 5', () => {
        expect(multiplyFactors(5)).toEqual(60)
    })
    test('should return 2520 for 10', () => {
        expect(multiplyFactors(10)).toEqual(2520)
    })
    test('should return 232792560 for 20', () => {
        expect(multiplyFactors(20)).toEqual(232792560)
    })
    test('should return 3.099044504245997e+21 for 50', () => {
        expect(multiplyFactors(50)).toEqual(3.099044504245997e+21)
    })
})