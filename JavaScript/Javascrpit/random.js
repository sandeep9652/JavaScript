//103 JavaScript Program to Convert Date to Number
// program to convert date to number
// create date
const d1 = new Date();
console.log(d1);

// converting to number
const result = d1.getTime();
console.log(result);
//////////////////////////////////////////////////////////////////////
//102 JavaScript Program to Write to Console

// program to write to console

// passing number 
console.log(8);

// passing string
console.log('hello');

// passing variable
const x = 'hello';
console.log(x);

// passing function
function sayName() {
    return 'Hello John';
}
console.log(sayName());

// passing string and a variable
const name = 'John';
console.log('Hello ' + name);

// passing object
let obj = {
    name: 'John',
    age: 28
}
console.log(obj);

/////////////////////////////////////////////////////
//101 JavaScript Program to Remove All Whitespaces From a Text

let str = "Hi Vinod Paidakulawar how are you!"
console.log(str.replace(' ', ''))

// program to trim a string


let replaceSpace = function(str1){
    return str1.replace(/\s/g, '')
}

console.log(replaceSpace('       Hello I am good           '))


//100.JavaScript Program to Get the Dimensions of an Image
// program to get the dimensions of an image
        /*
const img = new Image();

// get the image
img.src = '//cdn.programiz.com/sites/tutorial2program/files/cover-artwork.png';

// get height and width
img.onload = function() {
  console.log('width ' + this.width)
  console.log('height '+ this.height);
}
         */
//99.JavaScript Program to Pass a Function as Parameter
// program to pass a function as a parameter

function greet() {
    return 'Hello';
}

// passing function greet() as a parameter
function name1(user, func)
{

    // accessing passed function
    const message = func();

    console.log(`${message} ${user}`);
}

name1('John', greet);
name1('Jack', greet);
name1('Sara', greet);

//98.JavaScript Program to Check if a Number is Float or Integer
// program to check if a number is a float or integer value

function checkNumber(x) {

    let regexPattern = /^-?[0-9]+$/;
    
    // check if the passed number is integer or float
    let result = regexPattern.test(x);
    
    if(result) {
        console.log(`${x} is an integer.`);
    }
    else {
        console.log(`${x} is a float value.`)
    }

}

checkNumber(44);
checkNumber(-44);
checkNumber(3.4);
checkNumber(-3.4);

/////////////////////////////////////////////////////////////////////
//95.JavaScript Program to Perform Function Overloading
// program to perform function overloading
function sum() {
    switch (arguments.length) {
    case 0:
        console.log('You have not passed any argument');
        break;
    case 1:
        console.log('Pass at least two arguments');
        break;
    default:
        let result = 0;
        let length = arguments.length;
    
        for (i = 0; i < length; i++) {  
            result = result + arguments[i];  
        }  
        console.log(result);
        break;
    }
}

sum();
sum(5); 
sum(5, 9);    
sum(1, 2, 3, 4, 5, 6, 7, 8, 9);

//////////////////////////////////////////////////////////////////////
//94.JavaScript Program to Generate a Range of Numbers and Characters
// program to generate range of numbers and characters
function* iterate(a, b) {
    for (let i = a; i <= b; i += 1) {
      yield i
    }
  }
  
  function range(a, b) {
      if(typeof a === 'string') {
          let result = [...iterate(a.charCodeAt(), b.charCodeAt())].map(n => String.fromCharCode(n));
          console.log(result);
      }
      else {
          let result = [...iterate(a, b)];
          console.log(result);
      }
  }
  
  range(1, 5);
  range('A', 'G');

////////////////////////////////////////////////////////////////////////
//93. JavaScript Program to Pass Parameter to a setTimeout() Function

// program to pass parameter to a setTimeout() function
                    /*
function greet() {
    console.log('Hello world');
}

// passing parameter
setTimeout(greet, 3000);
console.log('This message is shown first');
                        */

/////////////////////////////////////////////////////////////////////////
//92. JavaScript Program To Work With Constants
// program to include constants

const a = 5;
console.log(a);

// constants are block-scoped
{
    const a = 50;
    console.log(a);
}
console.log(a);

const arr = ['work', 'exercise', 'eat'];
console.log(arr);

// add elements to arr array
arr[3] = 'hello';
console.log(arr);

// the following code gives error
// changing the value of a throws an error
// uncomment to verify
// a = 8;

// throws an error
// const x; 
/////////////////////////////////////////////////////////////////////////
//91.JavaScript Program to Check If a Variable is of Function Type
// program to check if a variable is of function type
                      /*
function testVariable(variable) {
      
    if(Object.prototype.toString.call(variable) == '[object Function]') {
        console.log('The variable is of function type');
    }
    else {
        console.log('The variable is not of function type');
    }
}

const count = true;
const x = function() {
    console.log('hello')
};

testVariable(count);
testVariable(x);

// program to check if a variable is of function type

function testVariable(variable) {
      
    if(typeof variable === 'function') {
        console.log('The variable is of function type');
    }
    else {
        console.log('The variable is not of function type');
    }
}

const count = true;
const x = function() {
    console.log('hello')
};

testVariable(count);
testVariable(x);
                        
                  */

/////////////////////////////////////////////////////////////////
//90.JavaScript Program to Validate An Email Address

// program to validate an email address

function validateEmail(email_id) {
    const regex_pattern =      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (regex_pattern.test(email_id)) {
        console.log('The email address is valid');
    }
    else {
        console.log('The email address is not valid');
    }
}

validateEmail('abc123@gmail.com');
validateEmail('hello@com');                         

///////////////////////////////////////////////////////////////
//89.JavaScript Program To Get The Current URL

////////////////////////////////////////////////////////////
//88.Javascript Program to Generate a Random Number Between Two Numbers
// input from the user
let minMax = function(a, b){
const min = a;
const max = b;

// generating a random number
return Math.floor(Math.random() * (max - min + 1)) + min;
}
// display a random number
console.log(minMax(1,50))
//console.log(`Random value between ${min} and ${max} is ${a}`);

/////////////////////////////////////////////////////////////////////////////////////
//JavaScript Program To Check If A Variable Is undefined or null
//85. program to check if a variable is undefined or null

function checkVariable(variable) {

    if( typeof variable === 'undefined' || variable === null ) {
        console.log('The variable is undefined or null');
    }
    else {
       console.log('The variable is neither undefined nor null');
    }
}

let newVariable;

checkVariable(5);
checkVariable('hello');
checkVariable(null);
checkVariable(newVariable);

////////////////////////////////////////////////////////////////////
//JavaScript Program to Get File Extension
// program to get the file extension

function getFileExtension(filename){

    // get file extension
    const extension = filename.split('.').pop();
    return extension;
}

// passing the filename
const result1 = getFileExtension('module.js');
console.log(result1);

const result2 = getFileExtension('module.txt');
console.log(result2);
//////////////////////////////////////////////////////////////
//82.JavaScript Program to Split Array into Smaller Chunks

// program to split array into smaller chunks

function splitIntoChunk(arr, chunk) {

    for (i=0; i < arr.length; i += chunk) {

        let tempArray;
        tempArray = arr.slice(i, i + chunk);
        console.log(tempArray);
    }

}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunk = 2;
splitIntoChunk(array, chunk);

////////////////////////////////////////////////////////////////
//JavaScript Program To Perform Intersection Between Two Arrays

// program to perform intersection between two arrays

function performIntersection(arr1, arr2) {

    const intersectionResult = arr1.filter(x => arr2.indexOf(x) !== -1);
 
    return intersectionResult;

}

const array1 = [1, 2, 3, 5, 9];
const array2 = [1, 3, 5, 8];


console.log(performIntersection(array1, array2));
/////////////////////////////////////////////////////////////
//JavaScript Program to Get Random Item From an Array

// program to get a random item from an array

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

//const array = ;

console.log(getRandomItem([1, 'hello', 5, 8]));
//console.log(result);

////////////////////////////////////////////////////////////////////////////
//79.JavaScript Program to Compare Elements of Two Arrays

// program to compare two arrays

function compareArrays(arr1, arr2) {

    // compare arrays
    const result = JSON.stringify(arr1) == JSON.stringify(arr2)

    // if result is true
    if(result) {
        console.log('The arrays have the same elements.');
    }
    else {
        console.log('The arrays have different elements.');
    }

}



compareArrays([1, 3, 5, 8], [1, 3, 6, 8]);

/////////////////////////////////////////////////////////////////////
//78.JavaScript Program to Extract Given Property Values from Objects as Array
// program to extract value as an array from an array of objects

function extractValue(arr, prop) {

    // extract value from property
    let extractedValue = arr.map(item => item[prop]);

    return extractedValue;

}

console.log(extractValue([{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}], 'a'));

////////////////////////////////////////////////////////////////////////////
//77.JavaScript Program to Create Two Dimensional Array
// program to create a two dimensional array

function twoDimensionArray(a, b) {
    let arr = [];

    // creating two dimensional array
    for (let i = 0; i< a; i++) {
        for(let j = 0; j< b; j++) {
            arr[i] = [];
        }
    }

    // inserting elements to array
    for (let i = 0; i< a; i++) {
        for(let j = 0; j< b; j++) {
            arr[i][j] = j;
        }
    }
    return arr;
}


console.log(twoDimensionArray(5, 5));
///////////////////////////////////////////////////////////////////////////
//76.JavaScript Program to Sort Array of Objects by Property Values
// program to sort array by property name

function compareName(a, b) {

    // converting to uppercase to have case-insensitive comparison
    const name1 = a.name.toUpperCase();
    const name2 = b.name.toUpperCase();

    let comparison = 0;

    if (name1 > name2) {
        comparison = 1;
    } else if (name1 < name2) {
        comparison = -1;
    }
    return comparison;
}

const students = [{name: 'Sara', age:24},{name: 'John', age:24}, {name: 'Jack', age:25}];

console.log(students.sort(compareName));

// program to sort array by property name

function compareAge(a, b) {

    return a.age - b.age;
}

const student = [{name: 'Sara', age:24},{name: 'John', age:22}, {name: 'Jack', age:27}];

console.log(student.sort(compareAge));

////////////////////////////////////////////////////////////////////////////////////////////////
//JavaScript Program to Merge Two Arrays and Remove Duplicate Items
// program to merge and remove duplicate value from an array

function getUniqueAfterMerge(arr1, arr2){

    // merge two arrays
    let arr = [...arr1, ...arr2];

    // removing duplicate
    let uniqueArr = [...new Set(arr)];

    console.log(uniqueArr);
}

const array3 = [1, 2, 3];
const array4 = [2, 3, 5]

// calling the function
getUniqueAfterMerge(array3, array4);

// program to merge and remove duplicate value from an array

function getUniqueAfterMerge(arr1, arr2){

    // merge two arrays
    let arr = arr1.concat(arr2);
    let uniqueArr = [];

    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array5 = [1, 2, 3];
const array6 = [2, 3, 5]

// calling the function
// passing array argument
getUniqueAfterMerge(array5, array6);

/////////////////////////////////////////////////////////////////////////////
//74.JavaScript Program to Remove Duplicates From Array
// program to remove duplicate value from an array

function getUnique(arr){

    // removing duplicate
    let uniqueArr = [...new Set(arr)];

    console.log(uniqueArr);
}

const arra = [1, 2, 3, 2, 3];
/*
In the above program, Set is used to remove duplicate items from an array.

A Set is a collection of unique values.

Here,

The array is converted to Set and all the duplicate elements are automatically removed.
The spread syntax ... is used to include all the elements of the Set to a new array.

*/

// calling the function
getUnique(arra);

///////////////////////////////////////////////////////////////////////////
//73.JavaScript Program to Add Element to Start of an Array
// program to add element to an array

function addElement(arr) {

    // adding new array element
    arr.unshift(10);
    
    console.log(arr);
}

const arr1ay = [1, 2, 3];

// calling the function
// passing array argument
addElement(arr1ay);

// program to add element to an array

function addElement(arr) {

    // adding element to array
    arr = [4, ...arr];
    
    console.log(arr);
}

const ar1ray = [1, 2, 3];

// calling the function
addElement(ar1ray);
                 /*
the spread operator ... is used to add a new element to the beginning of an array.

arr = [4, ...arr]; takes first element as 4 and the rest elements are taken from array.

*/

///////////////////////////////////////////////////////////////////////////////////////
//JavaScript Program to Empty an Array

// program to append an object to an array

function emptyArray(arr) {

    // substituting new array
    arr.splice(0, arr.length);
    
    return arr;
}

const arrayt = [1, 2 ,3];
console.log(arrayt);

// call the function
const resultt = emptyArray(arrayt);
console.log(resultt);

/*
the splice() method is used to remove all the elements of an array.

In the splice() method,

The first argument is the index of an array to start removing an item from.
The second argument is the number of elements that you want to remove from the index element.
*/

///////////////////////////////////////////////////////////////////////
//71.JavaScript Program to Check if An Object is An Array
// program to check if an object is an array

function checkObject(arr) {

    // check if arr is array
    const result = Array.isArray(arr);

    if(result) {
        console.log(`[${arr}] is an array.`);
    }
    else {
        console.log(`${arr} is not an array.`);
    }

}
/*
 the Array.isArray() method is used to check if an object is an array.

The Array.isArray() method returns true if an object is an array, otherwise returns false.
*/

const arrayArray = [1, 2, 3];

// call the function
checkObject(arrayArray);

///////////////////////////////////////////////////////////////////////////////
//70.JavaScript Program to Append an Object to An Array

// program to append an object to an array

function insertObject(arr, obj) {

    // append object
    arr.push(obj);
    
    console.log(arr);
}

// original array
let array70 = [1, 2, 3];

// object to add
let object = {x: 12, y: 8};

// call the function
insertObject(array70, object);

// program to append an object to an array

function insertObject(arr, obj) {

    // find the last index
     let index = arr.length;
 
     // appending object to end of array
     arr.splice(index, 0, object);
     
     console.log(arr);
 }
 
 // original array
 let array70b = [1, 2, 3];
 
 // object to add
 let object70b = {x: 12, y: 8};
 
 // call the function
 insertObject(array70b, object70b);

 /*
 The splice() method adds and/or removes an item.

In the splice() method,

The first argument represents the index where you want to insert an item.
The second argument represents the number of items to be removed (here, 0).
The third argument represents the element that you want to add to an array.
*/
// program to append an object to an array

function insertObject(arr, obj) {

    // append object
     arr = [...arr, object];
     
     console.log(arr);
 }
 
 // original array
 let array70c = [1, 2, 3];
 
 // object to add
 let object70c = {x: 12, y: 8};
 
 // call the function
 insertObject(array70c, object70c);

//////////////////////////////////////////////////////////////////////////////////////
// program to insert an item at a specific index into an array

function insertElement() {
    let array = [1, 2, 3, 4, 5];

    // index to add to
    let index = 3;

    // element that you want to add
    let element = 8;
  
    array.splice(index, 0, element);
    console.log(array);
}

insertElement();
/*
Unlike the slice() method, the splice() method will 
change the contents of the original array. The splice() method is
 used to add or remove elements of an existing array and the return 
 value will be the removed items from the array.
 */
//splice(start, optional delete count, optional items to add)

const food = ['pizza', 'cake', 'salad', 'cookie'];

food.splice(2,2)
console.log(food)
////////////////////////////////////////////////
//68.JavaScript Program to Check if An Array Contains a Specified Value

// program to check if an array contains a specified value

const array68 = ['you', 'will', 'learn', 'javascript'];

const hasValue68 = array68.includes('javascript');

// check the condition
if(hasValue68) {
    console.log('Array contains a value.');
} else {
    console.log('Array does not contain a value.');
}

// program to check if an array contains a specified value

const array68b = ['you', 'will', 'learn', 'javascript'];

const hasValue68b = array68b.indexOf('javascript') !== -1;

// check the condition
if(hasValue68b) {
    console.log('Array contains a value.');
} else {
    console.log('Array does not contain a value.');
}

////////////////////////////////////////////////////////////
// 67.JavaScript Program to Remove Specific Item From an Array

// program to remove item from an array

function removeItemFromArray(array, n) {
    const newArray = [];

    for ( let i = 0; i < array.length; i++) {
        if(array[i] !== n) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

const result67 = removeItemFromArray([1, 2, 3 , 4 , 5], 2);

console.log(result67);

// program to remove item from an array

function removeItemFromArray(array, n) {
    const index = array.indexOf(n);

    // if the element is in the array, remove it
    if(index > -1) {

        // remove item
        array.splice(index, 1);
    }
    return array;
}

const result67b = removeItemFromArray([1, 2, 3 , 4, 5], 2);

console.log(result67b);
                                   /*

/////////////////////////////////////////////////////////////
//66 JavaScript Program to Create Countdown Timer

// program to create a countdown timer

// time to countdown from (in milliseconds)
let countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000;

// countdown timer
let x66 = setInterval(function() {

    // get today's date and time in milliseconds
    let now = new Date().getTime();

    // find the interval between now and the countdown time
    let timeLeft = countDownDate - now;

    // time calculations for days, hours, minutes and seconds
    const days = Math.floor( timeLeft/(1000*60*60*24) );
    const hours = Math.floor( (timeLeft/(1000*60*60)) % 24 );
    const minutes = Math.floor( (timeLeft/1000/60) % 60 );
    const seconds = Math.floor( (timeLeft/1000) % 60 );

    // display the result in the element with id="demo"
    console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

    // clearing countdown when complete
    if (timeLeft < 0) {
        clearInterval(x66);
        console.log('CountDown Finished');
    }
    }, 1000);
                                    */

    ////////////////////////////////////////////////
    //65.JavaScript Program to Compare The Value of Two Dates

    // program to compare value of two dates
// create two dates
const d165 = new Date();
const d2 = new Date();

// comparisons
const compare1 = d165 < d2;
console.log(compare1);

const compare2 = d165 > d2;
console.log(compare2);

const compare3 = d165 <= d2;
console.log(compare3);

const compare4 = d165 >= d2;
console.log(compare4);

const compare5 = d165.getTime() === d2.getTime();
console.log(compare5);

const compare6 = d165.getTime() !== d2.getTime();
console.log(compare6);

////////////////////////////////////////////////////////////////////

//64.Javascript Program to Display Current Date
// program to display the date
// get local machine date time
const date = new Date();

// get the date as a string
const n = date.toDateString();

// get the time as a string
const time = date.toLocaleTimeString();

// display date
console.log('Date: ' + n);

// display time
console.log('Time: ' + time);
// The toDateString() method returns the date portion of a date object.
//The toLocaleTimeString() method returns the time portion of a date object.

////////////////////////////////////////////////////////////////////////////
//JavaScript Program to Format the Date

// program to format the date
// get current  date
let currentDate = new Date();

// get the day from the date
let day = currentDate.getDate();

// get the month from the date
// + 1 because month starts from 0
let month = currentDate.getMonth() + 1;

// get the year from the date
let year = currentDate.getFullYear();

// if day is less than 10, add 0 to make consistent format
if (day < 10) {
    day = '0' + day;
}

// if month is less than 10, add 0
if (month < 10) {
    month = '0' + month;
}

// display in various formats
const formattedDate1 = month + '/' + day + '/' + year;
console.log(formattedDate1);

const formattedDate2 = month + '-' + day + '-' + year;
console.log(formattedDate2);

const formattedDate3 = day + '-' + month + '-' + year;
console.log(formattedDate3);

const formattedDate4 = day + '/' + month + '/' + year;
console.log(formattedDate4);

////////////////////////////////////////////////////////////////////////
// 62.JavaScript Program to Check Leap Year

// program to check leap year
function checkLeapYear(year) {

    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year2023 = 2023;
//prompt('Enter a year:');

checkLeapYear(year2023);

//////////////////////////////////////////////////////////////
//60.JavaScript Program to Display Date and Time
// program to display the date and time
// get date and time 2017, 2, 12, 9, 25, 30
const date60 = new Date();

// get the date as a string
const n60 = date.toDateString();

// get the time as a string
const time60 = date60.toLocaleTimeString();

// display date
console.log('Date: ' + n60);

// display time
console.log('Time: ' + time60);
/////////////////////////////////////////////////////////////
//60.JavaScript Program to Replace All Line Breaks with <br>
// program to replace all line breaks in a string with <br>
const string = `I am Learning JavaScript.
JavaScript is fun.
JavaScript is easy.`;

const result60 = string.replace(/(\r\n|\r|\n)/g, '<br>');

console.log(result60);
//The pattern /(\r\n|\r|\n)/ checks for line breaks.

/////////////////////////////////////////////////////////////
//59.JavaScript Program to Replace all Instances of a Character in a String

// program to replace all instances of a character in a string

const string59 = 'Learning JavaScript Program';

const result59 = string.replace(/a/g, "A");

console.log(result);

// program to replace all instances of character in a string

const string59b = 'Learning JavaScript Program';

const splitString = string.split('a');

const result59b = splitString.join('A');

console.log(result);

/////////////////////////////////////////////////////////////////
//58.JavaScript Program to Compare Two Strings

// js program to perform string comparison

const string1 = 'JavaScript Program';
const string2 = 'javascript program';

// compare both strings
const result58 = string1.toUpperCase() === string2.toUpperCase();

if(result58) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');

}

// program to perform string comparison

const string158 = 'JavaScript Program';
const string258 = 'javascript program';

// create regex
const pattern = new RegExp(string1, "gi");

// compare the stings
const result58b = pattern.test(string2)

if(result58b) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}

// program to perform case insensitive string comparison

const string158c = 'JavaScript Program';
const string258c = 'javascript program';

const result58c = string158c.localeCompare(string258c, undefined, { sensitivity: 'base' });

if(result58c == 0) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}
/*

the localeCompare() method is used to perform case insensitive string comparison.

The localeCompare() method returns a number that indicates whether a reference string
 comes before, or after, or is the same as the given string.
 */
//////////////////////////////////////////////////////////////
//58.JavaScript Program to Check Whether a String Contains a Substring
// program to check if a string contains a substring

// take input
const str57a = 'Enter a string'
const checkString = 'Enter a string that you want to check'

// check if string contains a substring
if(checkString.includes(str57a)) {
    console.log(`The string contains ${checkString}`);
} else {
    console.log(`The string does not contain ${checkString}`);
}

// program to check if a string contains a substring

// take input
const str57b = 'Enter a string'
const checkString57 = 'Enter a string that you want to check:';

// check if string contains a substring
if(checkString57.indexOf(str57b) !== -1) {
    console.log(`The string contains ${checkString57}`);
} else {
    console.log(`The string does not contain ${checkString57}`);
}
///////////////////////////////////////////////////////////////
//JavaScript Program to Convert Objects to Strings
// program to convert an object to a string

const person = {
    name: 'Jack',
    age: 27
}

const result55 =  JSON.stringify(person);

console.log(result55);
console.log(typeof result55);

///////////////////////////////////////////////////////
//JavaScript Program to Check if a String Starts With Another String
// program to check if a string starts with another string

const string54 = 'hello world';

const toCheckString54 = 'hi';

if(string54.startsWith(toCheckString54)) {
    console.warn('The string starts with "he".');
}
else {
    console.warn(`The string does not starts with "he".`);
}

// program to check if a string starts with another string

const string54b = 'hello world';

const pattern54b = /^he/;

let result54b = pattern.test(string);

if(result) {
    console.warn('The string starts with "he".');
}
else {
    console.warn(`The string does not starts with "he".`);
}
/////////////////////////////////////////////////////////////
//JavaScript Program to Generate Random String

// program to generate random strings

const result53 = Math.random().toString(36).substring(2,10);
console.log(result53);
//In toString(36) method, 36 represents base 36. The toString(36) represents digits beyond 9 by letters.

// program to generate random strings

// declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(generateString(5));
///////////////////////////////////////////////////////
//JavaScript Program to Format Numbers as Currency Strings
// program to format numbers as currency string
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

formatter.format(2500);

// program to format numbers as currency string

const number = 1234.5678;

const result50 = '$ ' + number.toFixed(2);

console.log(result50);

/////////////////////////////////////////////////////////////////
//JavaScript Program to Create Multiline Strings

// program to create a multiline strings

// using the \ operator
const message = 'This is a long message\n \
that spans across multiple lines\n \
in the code.'

console.log(message);
////////////////////////////////////////////////////
//JavaScript Program to Replace All Occurrences of a String
// program to replace all occurrence of a string

const string48 = 'Mr red has a red house and a red car';

const result48 = string.split('red').join('blue');

console.log(result48);
//////////////////////////////////////////////////////////////
//JavaScript Program to Add Key/Value Pair to an Object

// program to add a key/value pair to an object

const person40 = {
    name: 'Monica',
    age: 22,
    gender: 'female'
}

// add a key/value pair
person40.height = 5.4;

console.log(person40);

////////////////////////////////////////////////////////////////////
//JavaScript Program to Count the Number of Keys/Properties in an Object

// program to count the number of keys/properties in an object

const student35 = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

let count = 0;

// loop through each key/value
for(let key in student35) {

    // increase the count
    ++count;
}

console.log(count);

// program to count the number of keys/properties in an object

const student35b = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

// count the key/value
const result35b = Object.keys(student35b).length;

console.log(result35b);
//////////////////////////////////////////////////////////
//JavaScript Program to Merge Property of Two Objects

// program to merge property of two objects

// object 1
const person30a = {
    name: 'Jack',
    age:26
}

// object 2
const student30a = {
    gender: 'male'
}

// merge two objects
const newObj = Object.assign(person30a, student30a);

console.log(newObj);


// program to merge property of two objects

// object 1
const person30b = {
    name: 'Jack',
    age:26
}

// object 2
const student30b = {
    gender: 'male'
}

// merge two objects
const newObj30b = {...person30b, ...student30b};

console.log(newObj30b);

//two objects are merged together using the spread operator ...

//////////////////////////////////////////////////////////////////
//JavaScript Program to Loop Through an Object

// program to loop through an object using for...in loop

const student31 = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

// using for...in
for (let key in student31) { 
    let value;

    // get the value
    value = student31[key];

    console.log(key + " - " +  value); 
} 

///////////////////////////////////////////////////////
//JavaScript Program to Clone a JS Object
// program to clone the object

// declaring object
const person44 = {
    name: 'John',
    age: 21,
}

// cloning the object
const clonePerson = Object.assign({}, person44);

console.log(clonePerson);

// changing the value of clonePerson
clonePerson.name = 'Peter';

console.log(clonePerson.name);
console.log(person44.name);
/* The Object.assign() method is part of the ES6 standard.
 The Object.assign() method performs deep copy and copies all the properties from one or more objects.
 */

 // program to clone the object
// declaring object
const person44b = {
    name: 'John',
    age: 21,
}

// cloning the object
const clonePerson44 = { ... person44b}

console.log(clonePerson44);

// changing the value of clonePerson
clonePerson44.name = 'Peter';

console.log(clonePerson44.name);
console.log(person44b.name);

///////////////////////////////////////////////////////////
//JavaScript Program to Check if a Key Exists in an Object

// program to check if a key exists

const person45 = {
    id: 1,
    name: 'John',
    age: 23
}

// check if key exists
const hasKey = 'name' in person45;

if(hasKey) {
    console.log('The key exists.');
}
else {
    console.log('The key does not exist.');
}
////////////////////////////////////////////////////////////////////
//JavaScript Program to Check Whether a String Starts and Ends With Certain Characters

// program to check if a string starts with 'S' and ends with 'G'

function checkString43(str) {

    // check if the string starts with S and ends with G
    if(str.startsWith('S') && str.endsWith('G')) {
        console.log('The string starts with S and ends with G');
    }
    else if(str.startsWith('S')) {
        console.log('The string starts with S but does not end with G');
    }
     else if(str.endsWith('G')) {
        console.log('The string starts does not with S but end with G');
    }
    else {
        console.log('The string does not start with S and does not end with G');
    }
}


// take input
let string43 = 'Enter a string: ';
checkString43(string43);

// program to check if a string starts with 'S' and ends with 'G'

function checkString43b(str) {

    // check if the string starts with S and ends with G
    if( /^S/i.test(str) && /G$/i.test(str)) {
        console.log('The string starts with S and ends with G');
    }
    else if(/^S/i.test(str)) {
        console.log('The string starts with S but does not ends with G');
    }
     else if(/G$/i.test(str)) {
        console.log('The string starts does not with S but ends with G');
    }
    else {
        console.log('The string does not start with S and does not end with G');
    }
}

// for loop to show different scenario
for (let i = 0; i < 3; i++) {

    // take input
    const string43b= 'Enter a string: '

    checkString43b(string43b);
}
/////////////////////////////////////////////////////////////
//JavaScript Program to Remove a Property from an Object

// program to remove a property from an object

// creating an object
const student42 = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};

// deleting a property from an object
delete student42.greet;
delete student42['score'];

console.log(student42);
//You can use the delete operator with . or [ ] to remove the property from an object.
/////////////////////////////////////////////////////////////////
//JavaScript Program to Count the Number of Vowels in a String

// program to count the number of vowels in a string

function countVowel(str) { 

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}

// take input
const string41a = 'Enter a string: ';

const result41a = countVowel(string41a);

console.log(result41a);
//The pattern /[aeiou]/gi checks for all the vowels (case-insensitive) in a string. Here,
//str.match(/[aeiou]/gi); gives ["a", "a", "i", "o", "a"]

//JavaScript Program to Convert the First Letter of a String into UpperCase

// program to convert first letter of a string to uppercase
function capitalizeFirstLetter(str) {

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}

// take input
const string39a='enter a string: ';

const result39a = capitalizeFirstLetter(string39a);

console.log(result39a);

// program to convert first letter of a string to uppercase
function capitalizeFirstLetter1(str) {

    // converting first letter to uppercase
    const capitalized = str.replace(/^./, str[0].toUpperCase());

    return capitalized;
}

// take input
const string38 = 'enter a string: ';

const result38 = capitalizeFirstLetter1(string38);

console.log(result38);
//The regex pattern is /^./ matches the first character of a string.
//JavaScript Program to Check the Number of Occurrences of a Character in the String

// program to check the occurrence of a character

function countString(str, letter) {

    // creating regex 
    const re = new RegExp(letter, 'g');

    // matching the pattern
    const count = str.match(re).length;

    return count;
}

// take input from the user
const string37 = 'Enter a string: a a a a a a aallit aa '
const letterToCheck ='a';

//passing parameters and calling the function
const result37 = countString(string, letterToCheck);

// displaying the result
console.log(result37);
//////////////////////////////////////////////////////
//JavaScript Program to Create Objects in Different Ways

// program to create JavaScript object using object literal
const person36 = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};

console.log(typeof person36); // object

// accessing the object value
console.log(person36.name);
console.log(person36.hobbies[0]);
person36.greet();
console.log(person36.score.maths);

////////////////////////////////////////////////////////////////
//JavaScript Program to Reverse a String
// program to reverse a string

function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// take input from the user
const string35 = 'Enter a string: ';

const result35 = reverseString(string35);
console.log(result35);

///////////////////////////////////////////////////////////
//Replace Character of a String Using RegEx
// program to replace a character of a string

const string27 = 'Mr Red has a red house and a red car';

// regex expression
const regex27 = /red/ig;

// replace the characters
const newText = string27.replace(regex27, 'blue');

// display the result
console.log(newText);
/////////////////////////////////////////////////////////////
//JavaScript Program to Sort Words in Alphabetical Order
// program to sort words in alphabetical order

// take input
const string32 = 'Enter a sentence: ';

// converting to an array
const words = string.split(' ');

// sort the array elements
words.sort();

// display the sorted words
console.log('The sorted words are:');

for (const element of words) {
  console.log(element);
}

/////////////////////////////////////////////////////////////
//JavaScript Program to Check Whether a String is Palindrome or Not
// program to check if the string is palindrome or not

function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const stringp ='Enter a string: ';

// call the function
const value = checkPalindrome(stringp);

console.log(value);
/////////////////////////////////////////////////////
//JavaScript Program to Shuffle Deck of Cards
// program to shuffle the deck of cards

// declare card elements
const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

// empty array to contain cards
let deck = [];

// create a deck of cards
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i] };
        deck.push(card);
    }
}

// shuffle the cards
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}

console.log('The first five cards are:');

// display 5 results
for (let i = 0; i < 5; i++) {
    console.log(`${deck[i].Value} of ${deck[i].Suit}`)
}