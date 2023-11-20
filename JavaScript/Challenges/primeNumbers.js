function primeNumber(a, b) {
    let primeNum = [];
    let count = 0;
    for (let i = a; i <= b; i++) {
        for (let j = 1; j <= i; j++) {
            if (i % j == 0)
                count++
        }
        if (count == 2)
            primeNum.push(i)
        count = 0;
    }
    return primeNum
}
console.log(primeNumber(1, 10))

// The code starts by declaring a variable named primeNumber.

// The code then creates an empty array called primeNum and starts counting from 1 to 10.
// It loops through the numbers, checking if they are divisible by any number other than 0 or itself.
// If so, it increments the count of the current number in the loop and adds that number to its own list of primes.
// After two consecutive primes have been found, it stops adding new numbers to its list and sets its count back to zero.
// The code returns a list containing all of the primes up until 10 (the last value in this case).
// The code is a function that takes two parameters, a and b.
// The code iterates through the numbers from 1 to 10 and checks if it is divisible by any number other than 1 or 10.
// If so, then the count variable increments by one.
// Once the count reaches 2, then primeNumber() returns an array of all the prime numbers in between 1 and 10.


var inputStr = "Hello world"
function firToUpCase(str) {
    const splitArr = str.split(" ");
    const newArr = splitArr.map((value) => {
        return value.charAt(0).toUpperCase() + value.slice(1)
    })
    return newArr.join(" ")

}
console.log(firToUpCase(inputStr))

const givenArray = [2,3, 5, 8, 2, 5, 8, 9, 10,9,5,452,462]
const filteredArray = givenArray.filter((el, index, arr) => arr.indexOf(el) == index).sort()
console.log("filtered Array:" + [...new Set(filteredArray)])
console.log(" ")
const duplicateValueArray = function (givArr) {
    return givArr.filter((el, index, arr) => arr.indexOf(el) !== index)
}
//console.log("Duplicate array:" + [...new Set(duplicateValueArray(givenArray))])

const unionArr = [...new Set(givenArray)]
console.log("Union arry:"+unionArr)

// Function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
  }
  
  // Example usage
  let myNumber = 5;
  
  if (isEven(myNumber)) {
    console.log(`${myNumber} is even.`);
  } else {
    console.log(`${myNumber} is odd.`);
  }

  let myNumber = 5;
  
  if (isEven(myNumber)) {
    console.log(`${myNumber} is even.`);
  } else {
    console.log(`${myNumber} is odd.`);
  }