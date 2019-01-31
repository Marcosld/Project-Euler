const multiplyFactors = n =>
    Object.entries(smallestMultipleFactors(n)).reduce((result, [n, e]) => result * (n ** e), 1)

const smallestMultipleFactors = (n, i = 2, mergedFactors = {}) =>
    i > n ? mergedFactors
        : smallestMultipleFactors(n, i + 1, mergeFactors(
            mergedFactors, normalizeFactors(getAllFactors(i))
        ))

const mergeFactors = (factors1, factors2) =>
    Object.entries(factors1).reduce((merged, [n, e]) => e < factors2[n]
        ? {...merged, [n]: factors2[n]}
        : {...merged, [n]: e}, {...factors2})

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

const isPrime = (n, i = 2) =>
    i < n ? n % i !== 0 && isPrime(n, i + 1) : true

module.exports = {
    getAllFactors,
    normalizeFactors,
    mergeFactors,
    smallestMultipleFactors,
    multiplyFactors
}
