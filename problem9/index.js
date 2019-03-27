const isPythagoreanTriplet = (c, b, a) => (a ** 2) + (b ** 2) === (c ** 2)

const getPossibleTripletsForA = (c, b, a) =>  a < b ? [[c, b, a]].concat(getPossibleTripletsForA(c, b - 1, a + 1)) : []

const getPythagoreanTriplet = (sum, c = sum - 3, b = sum - c - 1, a = 1) =>
  getPossibleTripletsForA(c, b, a).find((triplet) => isPythagoreanTriplet(...triplet))
    || getPythagoreanTriplet(sum, c - 1, sum - c, 1)

const getPythagoreanTripletMult = sum => getPythagoreanTriplet(sum).reduce((mult, val) => val * mult , 1)

module.exports = {
  getPossibleTripletsForA,
  getPythagoreanTriplet,
  getPythagoreanTripletMult
}
