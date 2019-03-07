const isMultPalindrome = (x, y) =>
    (x * y).toString() === (x * y).toString().split('').reverse().join('')

const nextXYSameDigits = (x, y) =>
    (y - 1).toString().length === x.toString().length ?
        [x, y - 1] :
        (x - 1).toString().length === x.toString().length ?
            [x - 1, x - 1] :
            [null, null]

const getMultPalSameDigits = (x, y = x, max = 0) => {
    let palindromes = []
    while (x !== null && y !== null) {
        const [nextX, nextY] = nextXYSameDigits(x, y)
        if(isMultPalindrome(x, y)) palindromes.push(x * y)
        x = nextX
        y = nextY
    }
    return Math.max(...palindromes)
}

module.exports = {
    isMultPalindrome,
    nextXYSameDigits,
    getMultPalSameDigits
}
