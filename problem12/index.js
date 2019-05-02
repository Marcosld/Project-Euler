const getTriangleMoreThanDivisors = (nOfDivisors, triangleNumN = 2) =>
  getNumberOfDivisors(normalizeFactors(getAllFactors(getTriangleNumberN(triangleNumN)))) > nOfDivisors
    ? getTriangleNumberN(triangleNumN)
    : getTriangleMoreThanDivisors(nOfDivisors, triangleNumN + 1)

const getNumberOfDivisors = normalizedFactors =>
  Object.values(normalizedFactors).reduce((nOfDivisors, exp) =>
    (exp + 1) * nOfDivisors
    , 1)

const getTriangleNumberN = n => (n + 1) * (n / 2)

const normalizeFactors = factors =>
  factors.reduce((factorObj, factor) => factorObj[factor]
    ? {...factorObj, [factor]: factorObj[factor] + 1}
    : {...factorObj, [factor]: 1}, {})

const getAllFactors = (n, factor = 2, factors = []) =>
  n % factor === 0 ?
    getAllFactors(n/factor, factor, factors.concat(factor)) :
    nextPrime(factor) <= n ?
      getAllFactors(n, nextPrime(factor), factors) :
      factors

const nextPrime = n => isPrime(n + 1) ? n + 1 : nextPrime(n + 1)

const isPrime = x =>
  x <= 3
    ? x > 1
    : x % 2 === 0 || x % 3 === 0
    ? false
    : primeCheck(x)

const primeCheck = (x, i = 5) =>
  i * i <= x
    ? x % i !== 0 && x % (i + 2) !== 0 && primeCheck(x, i + 6)
    : true

module.exports = {
  getAllFactors,
  normalizeFactors,
  getTriangleNumberN,
  getNumberOfDivisors,
  getTriangleMoreThanDivisors
}
