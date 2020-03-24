//1. Counting Sheep

const countSheep = function (sheep) {
  if (sheep === 0) {
    console.log(`All sheep jumped over the fence`)
    return
  }
  console.log(`${sheep}: Another sheep jumps over the fence`)
  countSheep(sheep - 1)
}

let numSheep = 3
countSheep(numSheep)

//2. Power Calculator

const powerCalculator = function (base, exp) {
  if (exp < 0) {
    return `exponent should be >= 0`
  }
  if (exp === 1) return base
  // return base ** exp
  return base * powerCalculator(base, exp - 1)
}

console.log('powerCalculator(2,3)', powerCalculator(10, 3))

//3. Reverse String

const reverseString = function (string) {
  if (string.length === 1) {
    return string
  }
  return string.slice(string.length - 1) + reverseString(string.slice(0, -1))
}

let newString = 'string'
console.log(`reverseString(newString)`, reverseString(newString))

//4. nth Triangular Number

const nthTriangle = function (n) {
  if (n === 1) return n
  return n + nthTriangle(n - 1)
}

let num = 5
console.log('nthTriangle(num)', nthTriangle(num))

//4. String Splitter

const stringSplitter = function (string, separator) {
  let splitArray = []
  console.log('string', string)
  console.log('separator', separator)
  if (!string.includes(separator)) {
    splitArray.push(string)
    return splitArray
  }
  if (string.length === 0) return splitArray

  if (string[0] !== separator) {
    console.log('push', string.slice(0, string.indexOf(separator)))
    splitArray.push(string.slice(0, string.indexOf(separator)))
    stringSplitter(string.substr(string.indexOf(separator) + 1), separator)
  } else {
    console.log('splitArray else', string.slice(1, string.indexOf(separator)))
    splitArray.push(string.slice(1, string.indexOf(separator)))
    stringSplitter(string.substr(string.indexOf(separator) + 1), separator)
  }
  return splitArray
}

let split = '02/20/2020'
let separator = '/'
console.log('stringSplitter(split)', stringSplitter(split, separator))

//6. Fibonacci

const fibonacci = function (x) {
  if (x === 1) return [1];
  if (x === 2) return [1, 1];
  let seq = fibonacci(x - 1);
  seq.push(seq[seq.length - 2] + seq[seq.length - 1]);
  return seq;
}


let fibNum = 7
console.log('fibonacci(fibNum)', fibonacci(fibNum))

//7. Factorial

const factorial = function (x) {
  if (x === 1) return 1
  return x * factorial(x - 1)
}

let x = 5
console.log('factorial(x)', factorial(x))

//8. Maze
// const maze = function(mazeArray) {
//   let success = false

//   if (mazeArray[0][0] === 'e') success = true


// }

// let mazeArray = [
//   [' ', ' ', ' '],
//   [' ', '*', ' '],
//   [' ', ' ', 'e']
// ]
// console.log('maze(mazeArray)', maze(mazeArray))

//9. Maze 2




//10. Anagrams

const anagrams = function (subject) {
  let anagramArray = []
  if (subject.length === 1) {
    anagramArray.push(subject)
    return anagramArray
  }
  for (let i = 0; i < subject.length; i++) {
    let firstChar = subject[0]
    let charRemain = subject.substr(0, i) + subject.substr(i + 1)
    let innerAnagrams = anagrams(charsRemain)

  }

}

let subject = 'e'
console.log('anagrams(subject)', anagrams(subject))