const isMultPalindrome = (x, y) =>
    (x * y).toString() === (x * y).toString().split('').reverse().join('')

const nextXYSameDigits = (x, y) =>
    (y - 1).toString().length === x.toString().length ?
        [x, y - 1] :
        (x - 1).toString().length === x.toString().length ?
            [x - 1, x - 1] :
            [null, null]

const getMultPalSameDigits = (x, y = x) =>
    isMultPalindrome(x, y) ?
        x * y :
        nextXYSameDigits(x, y) !== [null, null] ?
            getMultPalSameDigits(...nextXYSameDigits(x, y)) :
            null

module.exports = {
    isMultPalindrome,
    nextXYSameDigits,
    getMultPalSameDigits
}
