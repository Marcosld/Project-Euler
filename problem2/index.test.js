const getSum = require('./index')

test('When adding fibonaccis below 100, it should equal 44', () => {
    expect(getSum(100)).toBe(44)
})

test('When adding fibonaccis below 150, it should equal 188', () => {
    expect(getSum(150)).toBe(188)
})

test('When adding fibonaccis below 4000000, it should equal 4613732', () => {
    expect(getSum(4000000)).toBe(4613732)
})