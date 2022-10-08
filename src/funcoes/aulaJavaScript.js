function logParams(a, b, c) {
    console.log(a,b,c)
}

logParams(1, 2, 3)
logParams(1,2,3,4,5)
logParams(1,2)

console.log("Heyyy!!!")

function sumAll(...nums) {
    let total = 0
    for(let n of nums) {
        total += n
    }
    return total
}

//console.log(sumAll(1,2,3,4,5,6,7,8,9,10))

//range(5) -> [1,2,3,4,5]
console.log(sumAll(5))

//reduce
const numbers = [1, 2, 3, 4, 5, 6]

const sum = (total, el) => total + el
const total = numbers.reduce(sum, 100)
console.log(total)

const avg = (acc, el, i, array) => {
    if(i === array.length - 1) {
        return (acc + el) / array.length
    } else {
        return acc + el
    }
}
const result = numbers.reduce(avg)
console.log(result)

//função somar(3)(4)(5)
function somar(a, b, c) {
    return a + b + c
}
console.log(somar(10,15,25))


//função calcular(3)(7)(fn)
function calcular(a) {
    return function op(b) {
        return (a * b)
        //return Math.pow(base, exp)
    }
}
console.log(calcular(10)(8))

//Arrow function
const felizNatal = () => console.log('Feliz Natal!!!')

//Callback
const fs = require('fs')
const path = require('path')

//const