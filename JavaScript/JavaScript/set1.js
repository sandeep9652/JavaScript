
//******Area of Triangle ***********/
let side1 = 5;
let side2 = 6;
let side3 = 7;

let perimeter = (side1 + side2 + side3)/2;

let area = Math.sqrt(perimeter*(perimeter-side1)*(perimeter-side2)*(perimeter-side3));
console.log(`Area of Triangle is : ${area}cm`);

////////////////////////////////reverse string///////////////////////////////////////////
let originalStr = "w3resource";
//  for(let i= originalStr.length; i>=0; i--){
//     console.log(originalStr.charAt(i))
//  }
console.log(originalStr.split("").reverse().join(""))

///////////////////////***Random Integer from 1 to 10********* */
let randomInt = Math.floor(Math.random()*10 + 1);
let givenInt = 5;
if(randomInt === givenInt){
    console.log(`randomInter ${randomInt} is equal to givenInteger ${givenInt}`)
}
else{
    console.log(`randomInter ${randomInt} is not equal to givenInteger ${givenInt}`) 
}
///////////////////////////////////////////////////////////////////////////////////////

function addition(a,b){
    return a+b;
}
function Multiplication(a,b){
    return a*b;
}
console.log(addition(3,5));
console.log(Multiplication(3,5))
console.log(3 + 9)

////////////////////////////////////////////////////////////////////////////////////
//c/5 = (f-32)/9





////////FIle extension name////////////
let fileExtension = function(str){
    console.log(str.split(".").pop()) // pop removes last element of an array
}
fileExtension("vinod.pdf")
fileExtension("google.com")

//////////////////////////////////////////
//Write a JavaScript program to get the difference between
// a given number and 13, if the number is broader than 13 return double the absolute difference.

let difference = function(num){
    if(num <= 13)
    return 13 - num;
    else
    return (num - 13)*2;
}
console.log(difference(35))

/////////////////////////////////////////////////
//Write a JavaScript program to compute the sum of the two given integers. 
//If the two values are the same, then return triple their sum.

let sum = function(a, b){
    if(a===b)
        return (a+b)*3;
    else
        return a+b
}
console.log(sum(6,6))

//Write a JavaScript program to check a pair of numbers and return true
// if one of the numbers is 50 or if their sum is 50.

let checkNum = function(a,b){
    if(a === 50 || b ===50 || (a+b)===50) {
         return console.log("true")
    }
    // else if((a+b)===50)
    //      return console.log("true")
    else 
         console.log("Given numbers " +a, "& " +b, "doesn't mmet specified condition")
}
checkNum(221, 28)

function test50(x,y){
    return ((x==50 || y==50) || (x + y == 50))
}
console.log(test50(25,52))
console.log(test50(50, 50))

//Write a JavaScript program to check whether a given 
//integer is within 20 of 100 or 400.
/*
function testHundred(x){
     retrun ((Math.abs(100 - x) <= 20) || (Math.abs(400 - x) <= 20));
}
console.log(testHundred(10));
console.log(testHundred(91));
console.log(testHundred(199));
console.log(testHundred(425));
*/
function testhundred(x) {
    return ((Math.abs(100 - x) <= 20) ||
       (Math.abs(400 - x) <= 20));
  }
  
  console.log(testhundred(10));
  console.log(testhundred(90));
  console.log(testhundred(99));
  console.log(testhundred(199));
  console.log(testhundred(200));

/////////////////  
//Write a JavaScript program to check two given integers whether one is positive and 
//another one is negative.

let positiveORNegative = function(a, b){
    return ((a < 0 && b>0)||(a > 0 && b<0))
}
console.log(positiveORNegative(1,-2))

//Write a JavaScript program to create another string by adding "Py" in front of a given string. 
//If the given string begins with "Py" return the original string.
/*
let prefixPy = function(str){
    if(str.chatAt(0) === P && str.chatAt(1) ===y)
        console.log(str)
    else
        console.log("Py" + str)    
}
prefixPy("Strity")
prefixPy("Py")
*/
function string_check(str1) {
    if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') 
    {
      return str1;
    }
   // return "Py"+str1;
    return `Py${str1}`;
  }
  
  console.log(string_check("Python"));
  console.log(string_check("thon"));

  //Write a JavaScript program to remove a character at the specified 
  //position in a given string and return the modified string.

function removeChar(str, at){
  let part1 = str.substring(0, at)
  let part2 = str.substring(at + 1, str.length)
  return (part1 + part2)
}
console.log(removeChar("Vinod", 1))

//Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. 
//The string length must be broader than or equal to 1.

function shuffelStr(str){
    let midStr =  str.substring(1, str.length - 1);
    if(str.length <= 1)
        return  str
    else 
        return (str.charAt(str.length - 1) + midStr + str.charAt(0))
}
console.log(shuffelStr("Vinod"))
console.log(shuffelStr("Paidakulawar"))
console.log(shuffelStr("a"))

//Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.

let preToSuffix = function(str){
    return str.charAt(0) + str.substring(1, str.length) + str.charAt(0)
}
console.log(preToSuffix("Vinod"))

////////////////////////////////////////////////////
//Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
let num = function(a){
    if( a % 3==0 || a % 7 == 0)
    console.log("Given Number is multiple of 3 or 7")
    else
    console.log("Given Number is not a multiple of 3 or 7")
}
num(15);
num(32);
num(49)
num(8)

//Write a JavaScript program to create a string from a given string. 
//This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

let subString3 = function(str){

    const mid3Str = str.substring(str.length - 3)
    return mid3Str + str + mid3Str

}
console.log(subString3("Paidakulawar"))

//Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.

let javaString = function(str){
    if(str.substring(0,4) === "Java")
    return true
    else
    return false
}
console.log(javaString("JavaApplication"))
console.log(javaString("JavApplication"))

//Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive).
// Return true if either of them falls within the range.
console.log(" Num bet 50 & 99")
let numIn50_99 = function(x,y){
    if((x>= 50 && x <=99) || (y >= 50 && y <= 99))  //  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99))
    return true
    else
    return false
}
console.log(numIn50_99(122,195))
console.log(numIn50_99(55,60))
console.log(numIn50_99(76,104))
//Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. 
//If "Script" appears in the string, return the string without "Script" otherwise return the original one.

let checkScript = function(str){
    if(str.substring(4, str.length) === "Script")
          return str.substring(4, str.length)
    else
          return str
}
console.log(checkScript("JavaScript"))
console.log(checkScript("JavaLanguage"))

//Write a JavaScript program to find the largest of three given integers.
//a,b,c 

let maxNum = function(num1,num2,num3){

    let largestNum;

switch (true) {
  case num1 > num2 && num1 > num3:
    largestNum = num1;
    break;
  case num2 > num1 && num2 > num3:
    largestNum = num2;
    break;
  default:
    largestNum = num3;
}
}

console.log(maxNum(12,94,95))
console.log(maxNum(-8,41,-54))

console.log(Math.max(12,94,95))
console.log(Math.max(-8,41,-54))