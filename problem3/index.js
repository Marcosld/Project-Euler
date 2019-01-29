const getLargestPrimeFactor = (n, factor = 2) =>
    n % factor === 0 ?
        getLargestPrimeFactor(n/factor, factor) :
        nextPrime(factor) <= n ?
            getLargestPrimeFactor(n, nextPrime(factor)) :
            factor

const nextPrime = n => isPrime(n + 1) ? n + 1 : nextPrime(n + 1)

const isPrime = (n, i = 2) =>
    i < n ? n % i !== 0 && isPrime(n, i + 1) : true

module.exports = {
    getLargestPrimeFactor,
    nextPrime,
    isPrime
}
