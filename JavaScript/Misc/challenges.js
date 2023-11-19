//1. Print all even numbers from 0 – 10
console.log("Even Numbers")
function evenNum(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0)
            console.log(i)
    }
}
evenNum(10)
/////////////////////////////////////////////////////////////////////
console.log("Odd Numbers")
let oddNum = function (odd) {
    for (let i = 1; i <= odd; i++) {
        if (i % 2 == 1)
            console.log(i)
    }
}
console.log(oddNum(10))
////////////////////////////////////////////////////////////////////
console.log("Prime Numbers")

function primeNumber(prime){
    let count =0;

    for(let i =2; i<= prime; i++){
        for(let j = 1; j<= i; j++){
            if(i % j == 0)
            count++
        }

        if(count == 2)
            console.log(i);
            count = 0;
    }
}
primeNumber(15)
////////////////////////////////////////////////////////////////////

console.log("Print a table containing multiplication tables")

function numtable(num){
    for(let i=1; i<=10; i++){
       console.log(num*i)
    }
}
numtable(28)
////////////////////////////////////////////////////////////////////////
console.log("Calculate the sum of numbers within an array") 
               
var numbers = [1, 2, 3, 10] // sums to 10
var Sum = 0;
for (var i = 0; i < numbers.length; i++) {
    Sum += numbers[i]
}
console.log(Sum)
//////////////////////////////////////////////////////////////////////////
console.log("Create a function that reverses an array")
let arr1 = [1,2,3,4]
for(let i=arr1.length; i>=0; i--){
console.log(arr1[i])
}
//////////////////////////////////////////////////////////////////////
console.log("Return the number of vowels in a string")
let str = "abcdefghijklmnopqurstuvwxyz"
//let i;
let vowelsCount = 0;
let consonantCount = 0;

let splittedStr = str.split("")
let vowles = ['a', 'e', 'i', 'o', 'u'];
for(let i=0; i< splittedStr.length; i++){
    if(vowles.includes(splittedStr[i]))
    vowelsCount++;
    else
    consonantCount++;
}
console.log(vowelsCount)
console.log(consonantCount)
///////////////////////////////////////////////////////////////////////////////
console.log("Return a Boolean if a number is divisible by 10")
let divBy10 = function(num){
    if(num % 10 === 0)
    return true
    else
    return false
}
console.log(divBy10(15))
console.log(divBy10(150))
////////////////////////////////////////////////////////////////////////////
console.log("Remove the spaces found in a string")

let remSpaces = function(str){
   str = str.replace(/\s/g,'');
   return str
}
console.log(remSpaces("adb def edg"))
/////////////////////////////////////////////////////////////////////////////
// console.log("Create a function that filters out negative numbers")
// let negativeNum = function(str){
//     for(let int of str){
//         if(!(str.includes(int)<0))
//         return int;
//     }

// }
// console.log(negativeNum(str['1', '-1'], ))                   
///////////////////////////////////////////////////////////////////////////////
console.log("Sort an array from lowest to highest")
let givenArray = [12,94,23,5, -98, -9, 1345,52];
let sortedArray = givenArray.sort(function(a,b){return a-b})
console.log(sortedArray.slice(0));

//The sort() method sorts an array alphabetically:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Ascending order Sorting:" +fruits.sort());

//The reverse() method reverses the elements in an array.

//You can use it to sort an array in descending order:
const fruit = ["Banana", "Orange", "Apple", "Mango"];
console.log("Dscending order Sorting:" +fruit.sort().reverse());
/*
By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a compare function:
*/
const points = [40, 100, 1, 5, 25, 10];
console.log("Ascending order Sorting:" +points.sort(function(a, b){return a - b}));
console.log("Descending order Sorting:" +points.sort(function(a, b){return b - a}));

/*
Find the Highest (or Lowest) Array Value
There are no built-in functions for finding the max or min value in an array.

However, after you have sorted an array, you can use the index to obtain the highest and lowest values.
*/

const point = [40, 100, 1, 5, 25, 10];

console.log("Lowest Number:" + point[0]);
point.sort(function(a, b){return a - b});
console.log("Higest Number:" + point[(point.length - 1)])
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value
var largArr = new Array();
var arr = new Array(93, 17, 56, 91, 98,
        33, 9, 38, 55, 78, 29, 81, 60);
 
findLargest3();
 
function findLargest3() {
    arr.sort((a, b) => a < b ?
        1 : a > b ? -1 : 0);
 
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
 
    console.log(arr.slice(0));
}