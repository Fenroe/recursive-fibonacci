// fibonacci sequence is where n of sequence is equal to n - 1 + n - 2
// the first two numbers of the fibonacci sequence are 0 and 1
// create an array of these two values
// if length parameter is two or less then do nothing
// else, push a new entry into the array, equal to the sum of the last two numbers of the array, for as many times as length - 2
// return slice of array, starting at 0 and ending at length

const getFibonacciSequence = (length) => {
    const fibonacciSequence = [0, 1]
    for (let i = 0; i < length - 2; i += 1) {
        const newFibonacciNumber = fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2]
        fibonacciSequence.push(newFibonacciNumber)
    }
    return fibonacciSequence.slice(0, length)
}

console.log(getFibonacciSequence(1))
console.log(getFibonacciSequence(5))
console.log(getFibonacciSequence(20))

const getFibonacciSequenceRecursively = (length) => {
    let fibonacciSequence = [0, 1]
    if (length > 2) {
        fibonacciSequence = getFibonacciSequenceRecursively(length - 1)
        const newFibonacciNumber =fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2]
        fibonacciSequence.push(newFibonacciNumber)
    }
    return fibonacciSequence.slice(0, length)
}

console.log(getFibonacciSequenceRecursively(1))
console.log(getFibonacciSequenceRecursively(5))
console.log(getFibonacciSequenceRecursively(20))
