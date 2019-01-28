const getSum = require('./index')

test('When adding multiples of 3 and 5 below 10 it equals 23', () => {
    expect(getSum(9)).toBe(23)
})

test('When adding multiples of 3 and 5 below 1000 it equals 23', () => {
    expect(getSum(999)).toBe(233168)
})