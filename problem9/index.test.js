const {
  getPossibleTripletsForA,
  getPythagoreanTriplet,
  getPythagoreanTripletMult
} = require('./index')

describe('getPossibleTripletsForA', () => {
  test('should return [6, 4, 1], [6, 3, 2] for 6, 4, 1', () => {
    expect(getPossibleTripletsForA(6, 4, 1)).toEqual([[6, 4, 1], [6, 3, 2]])
  })
})

describe('getPythagoreanTriplet', () => {
  test('should return 3, 4, 5 for 12', () => {
    expect(getPythagoreanTriplet(12)).toEqual([5, 4, 3])
  })
  test('should return 425, 375, 200 for 1000', () => {
    expect(getPythagoreanTriplet(1000)).toEqual([425, 375, 200])
  })
})
describe('getPythagoreanTripletMult', () => {
  test('should return 3, 4, 5 for 12', () => {
    expect(getPythagoreanTripletMult(12)).toEqual(60)
  })
  test('should return 425, 375, 200 for 1000', () => {
    expect(getPythagoreanTripletMult(1000)).toEqual(31875000)
  })
})