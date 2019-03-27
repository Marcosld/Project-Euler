const Lazy = require('lazy.js')

const getPrimeSumN = n => Lazy.generate(x => x, n).skip(2).filter(isPrime).sum()
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
  isPrime,
  getPrimeSumN
}
