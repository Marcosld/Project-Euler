module.exports = function getSum(n){
    return n >= 3 ?
        (n % 3 === 0 || n % 5 === 0) ?
            n + getSum(n - 1) :
            getSum(n - 1) :
        0
}
