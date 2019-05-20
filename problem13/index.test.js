const {
  sum,
  sumNumberStrings,
  getSumFirst10Digits,
  getSumFirst10DigitsInt
} = require('./index')

describe('sum() function', () => {
  test('Should be able to sum 2 numbers', () => {
    expect(sum('1', '8')).toEqual(['9'])
  })
  test('Should be able to sum 2 numbers and produce carry', () => {
    expect(sum('7', '8')).toEqual(['5','1'])
  })
  test('Should be able to sum 2 numbers with carry and produce carry', () => {
    expect(sum('7', '8', '2')).toEqual(['7','1'])
  })
})

describe('sumNumberStrings() function', () => {
  test('Should be able to sum equal digit numbers', () => {
    expect(sumNumberStrings('19', '28')).toEqual('47')
  })
  test('Should be able to sum when x has more digits', () => {
    expect(sumNumberStrings('12', '8')).toEqual('20')
  })

  test('Should be able to sum big strings', () => {
    const x = '97107287533902102798797998220837590246510135740250'
    const y = '46376937677490009712648124896970078050417018260538'
    const expected = '143484225211392112511446123117807668296927154000788'
    expect(sumNumberStrings(x, y)).toEqual(expected)
  })
})

describe('getSumFirst10Digits() function', () => {
  test('Should be able to sum all nums', () => {
    expect(getSumFirst10Digits()).toEqual('5537376230')
  })
})


describe('getSumFirst10DigitsInt() function', () => {
  test('Should be able to sum all nums', () => {
    expect(getSumFirst10DigitsInt()).toEqual('5537376230')
  })
})
