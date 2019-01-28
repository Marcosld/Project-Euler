module.exports = function getSum(topValue, i = 1, j = 2, sum = 2){
    const nextNum = i + j
    const nextI = nextNum + j
    const nextJ = nextNum + nextI
    return nextJ <= topValue ?
        getSum(topValue, nextI, nextJ, sum + nextJ) :
        sum
}
