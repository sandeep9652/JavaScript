let revTernery = (str) => {return (str === '') ? '' : revTernery(str.substr(1)) + str.charAt(0)}
console.log(revTernery('Hello'))
////////////////////////////////////////////////////////////////////////////////
let charTypeCount = function (str) {
    let vowel = 0;
    let consonant = 0
    for (let i in str) {  str.charAt(i).match(/[aeiou]/gi) ? vowel++ : consonant++ }
    console.log(`Vowels count:${vowel} & Consonant count:${consonant}`)
}
let givStr = "I am print vowel and am consonant count Am in console aeiou bcdfghjklmnpqrstvwxyz"
charTypeCount(givStr)
////////////////////////////////////////////////////////////////////////////////////////////////
let occChatInStr = function (str) { return str.match(/am/g).length }
console.log(occChatInStr(givStr))
///////////////////////////////////////////////////////////////////////////////////
let evenOrOdd = function (arr) {
    let evenArray = [];
    let oddArray = []
    for (let i in arr) { arr[i] % 2 === 0 ? evenArray.push(arr[i]) : oddArray.push(arr[i]) }
    console.log(evenArray)
    console.log(oddArray)
}
///////////////////////////////////////////////////////////////////////////////////
let sumOfArrayEle = (arr) => {
    return arr.reduce((pre, cur) => { return pre + cur })
} 
console.log(sumOfArrayEle([1, 2, 3, 4, 8, 9]))
//////////////////////////////////////////////////////////////////////////////////////
//First letter to upper case
var inputStr = "Hello world"
function firToUpCase(str){
  const splitArr =  str.split(" ");
 const newArr =   splitArr.map((value) =>{
     value.charAt(0).toUpperCase() + value.slice(1)
  })
  return newArr
 
}
console.log(firToUpCase("First Letter:"+inputStr))






//Duplicate Numbers 
//filter() - The JavaScript Array filter() Method is used to create a new array from a given array consisting of only those elements from 
//the given array which satisfy a condition set by the argument method.

//array.filter(callback(element, index, arr), thisValue)
/*
const givenArray = [2, -3, 5, 8, 2, 5, 8, 9, 10, 452, -426]
const filteredArray = givenArray.filter((el, index, arr) => arr.indexOf(el) == index).sort()
console.log("filtered Array:" + filteredArray)
console.log(" ")
const duplicateValueArray = function (givArr) {
    return givArr.filter((el, index, arr) => arr.indexOf(el) !== index)
}

console.log("Duplicate array:" + duplicateValueArray(givenArray))

console.log(" ")
const maxFun = function (arr) {
    return arr.reduce((pre, cur) => {
        return pre > cur ? pre : cur
    })
}

const minFun = function (arr) {
    return arr.reduce((pre, cur) => {
        return pre < cur ? pre : cur
    })
}

console.log("Maximum number in given array:" + maxFun(givenArray))
console.log("Minimum number in given array:" + minFun(givenArray))

console.log(" ")

let secLarValue = function (arr) {
    const sortedArray = arr.sort((a, b) => a - b)
    return sortedArray[1]
}
console.log("Second Largest Value:" + secLarValue(givenArray))

let arrySlice = function (arr) {
    const sor = arr.sort((a, b) => a - b)
    return sor.slice(1, 3)
}

console.log(" ")
console.log(arrySlice(givenArray))
//The Javascript arr.reduce() method in JavaScript is used to reduce the array to a single value 
//and executes a provided function for each value of the array 
//(from left to right) and the return value of the function is stored in an accumulator.

//array.reduce( function(total, currentValue, currentIndex, arr), initialValue )



///////////////////////////////////////////////////////////////////////////////////////////////////////
// Finding missing element in given array 
const arrNum = [1, 2, 3, 7, 4, 5, 6, 10, 20]

let missingValue = function (arr) {
    const misArr = [];
    const minValue = Math.min(...arr)
    const maxValue = Math.max(...arr)
    for (let i = minValue; i < maxValue; i++) {
        if (arr.indexOf(i) < 0)
            misArr.push(i)
    }
    return misArr
}

console.log("Missing values in given array in:" + missingValue(arrNum))

/////////////////////////////////////////////
//even and odd
let evenOrOdd = function (arr) {
    let evenArray = [];
    let oddArray = []
    for (let i in arr) {
        arr[i] % 2 === 0 ? evenArray.push(arr[i]) : oddArray.push(arr[i])
    }
    console.log(evenArray)
    console.log(oddArray)
}

evenOrOdd(arrNum)
///////////////////////////////////////////////////
//sum of values in given array 

let sum = function (arr) {
    let sum = 0;
    for (let i in arr) {
        sum = sum + arr[i]
    }
    return sum

}
console.log("Sum of array values:" + sum(arrNum))

let sumOfArrayEle = (arr) => {
    return arr.reduce((pre, cur) => {
        return pre + cur
    })
}
console.log(sumOfArrayEle(arrNum))
*/
///////////////////////////////////////////////////////////
//Prime Number & Prime Numbers
let isPrime = function (num) {
    let result = ''
    if (num === 0 || num === 1) {
        console.log(`Given ${num} is not prime number`)
    }
    else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                result = `${num} is a not prime number`
                break;
            }
            else {
                result = `${num} is a prime number`
            }
        }
    }
    console.log(result)
}

isPrime(7)

//////////////////////////////////////////////////////////
let primeNumbers = function (minNum, maxNum) {
    let primeNum = []
    let count = 0

    for (let i = minNum; i <= maxNum; i++) {

        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                count++
            }
        }
        if (count == 2)
            primeNum.push(i)
        count = 0
    }
    return primeNum

}
console.log(primeNumbers(1, 10))

////////////////////////////////////////////////////////////////////
// let charTypeCount = function (str) {
//     let vowel = 0;
//     let consonant = 0
//     for (let i in str) {
//         str.charAt(i).match(/[aeiou]/gi) ? vowel++ : consonant++
//     }
//     console.log(`Vowels count:${vowel} & Consonant count:${consonant}`)
// }
// let givStr = "I am print vowel and consonant count in console aeiou bcdfghjklmnpqrstvwxyz"
// charTypeCount(givStr)
console.log(" ")
/////////////////////////////////////////////////////////////////////
const givStrTo = "Learn JavaScript"

// let revTernery=(str)=>{
// return (str === '') ? '' : revTernery(str.substr(1)) + str.charAt(0)
// }
// console.log(revTernery('Hello'))

let strRev = function (str) {
    let revStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i]
    }
    return revStr

}
console.log(strRev(givStrTo))

console.log(" ")


let strToRevStr = function (str) {
    //let revStr = '';
    return str.split('').reverse().join('')
}
console.log(strToRevStr(givStrTo))
