//Show ways of creating a Object 
/*
//Object can be created by using Object constructor

const object1 = Object.create({key : value});

//Object can be created using Object literal form

const object2 = {
    key : value
}

//Object can be created using new keyword to constructor function
function getObject(key, value){
    this[key] = value;
}
const object3 = new getObject('key', 'value')

//Object can be created using Class
class Obj{
    constuctor(key, value){
        this.key = value;
    }
}
const object4 = new Obj('key', 'value')
*/

let obj1 = {
    age: 29,
    name: 'Vinod',
   
    male: true,

    greet() {
        console.log(`Hello ${obj1.name}, how are ypu?`)
    },

    arrStr: ['Banana', 'Mango', 'Apple', 'Watermelone', 'Kiwi'],

    arrInt: [5, 36, 9345, -7, 1, 46],

    score : {
        subject : 'Maths',
        marks : 70,
    }
}

//Display all the keys and values of nested object

function keyValuePrinter(obj){
    for(let key in obj){
        if(typeof obj[key] !== "object"){
            console.log("[" + key + ":" + obj[key]+ "]");
        }else{
            keyValuePrinter(obj[key]);
        }
    }
}
keyValuePrinter(obj1)

// let getKey = function (obj){
//     for(let key in obj){
//         if(key.hasOwnProperty(key))
//         return key
//     }
// }
// console.log(getKey)
//console.log(getKey(obj1))

// function getKey(obj){
//     for(let key in obj){
//         if(key.hasOwnProperty(key))
//         return key
//     }
// }
// console.log(getKey(obj1))

// function getValue(obj){
//     for(let key in obj){
//         if(key.hasOwnProperty(key))
//         return obj[key]
//     }
// }
// console.log(getValue(obj1))
//Logging all keys of object using object.keys
               
// for(let key in obj1){
//    if(obj1.hasOwnProperty(key)){
//     console.log(key)
//    }
// }
// for(let key in obj1){
//     if(obj1.hasOwnProperty(key))
//     console.log(obj1[key])
// }
// for(let key of Object.keys(obj1)){
//     if(obj1.hasOwnProperty(key))
//     console.log(key)
// }
// for(let value of Object.values(obj1)){
//     console.log(value)
// }
// Object.keys(obj1).forEach((key)=>{
//     if(obj1.hasOwnProperty(key))
//     console.log(key)
// })

//Object.values(obj1).forEach((value)=>{console.log(value)})

                            
//obj.hasOwnProperty(key) is only used to disply the properties present on the object and not inherited ones.

//Print all the values of an Object
// The values of an object can be obtained by using Object.values which returns an array of values
//console.log(Object.values(obj1))
//Object.values will only fetch the values of the object and not the inherited ones.


//Write a function which can be check if a given onject is empty or not
  //Onject is empty if it has no keys
  //Few objects such as Date object does not have any keys but still are not empty. Hence additional check can be implemented to verify the
  //verify the stringification if the object is also empty.
/*
let obj2 = {}

function isObjectEmpty(obj){
    if(obj !== null && typeof obj !== 'undfined' && typeof obj == 'object'){
        return Object.keys(obj).length === 0 && JSON.stringify(obj) == '{}';
    }
    else 
        return false;
}  

console.log(isObjectEmpty(obj1))
console.log(isObjectEmpty(obj2))

//Create an empty object which has no prototype attached to it
  //Objects created in JS will have a prototype object on it connected to other object or Object.
  //Object constructor can be used to create such an empty object

  const obj3 = Object.create(null)
  console.log(isObjectEmpty(obj3))

//Shows the usage of 'Object.entries'  to create an object from key value pairs.
// The key value pairs can be directly converted to object using entries method of Object

const arr = [['0','a'], ['1','b'],['2','c']];

const arr1 =[['math', 91],['eng', 92], ['science', 85], ['social', 79]]

const objFromArray1 = Object.fromEntries(arr);
const objFromArray3 = Object.fromEntries(arr1);

const map = new Map([['foo','bar'], ['baz', 42]]);
const objFromArray2 = Object.fromEntries(map);

console.log(objFromArray1)
console.log(objFromArray2)
console.log(objFromArray3)
*/

//Connect 2 objects so that one objet is prototpically connebcted to the other
  //Objects in JS are connected its prototype and is accessible for objects getPrototypeOf or _proto_.
  //setPrototypeOf is used to set the prototype of the object.

//   const obj4 = {a: 1};
//   const obj5 = {b: 2};

//  console.log(Object.setPrototypeOf({Vinod: 'QA'}, obj5));
















    
