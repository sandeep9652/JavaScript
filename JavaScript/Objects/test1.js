let data = [
    { "name": "Vishnu", "age": 35, "gender": "male" },
    { "name": "Laxmi", "age": 32, "gender": "Female" },
    { "name": "Brahma", "age": 50, "gender": "male" },
    { "name": "Saraswathi", "age": 48, "gender": "Female" },
    { "name": "Shiva", "age": 40, "gender": "male" },
    { "name": "Parvathi", "age": 38, "gender": "Female" },
    { "name": "Hanuman", "age": 20, "gender": "male" },
    { "name": "Ram", "age": 25, "gender": "male" },
    { "name": "Sita", "age": 22, "gender": "male" },
    { "name": "Krishna", "age": 30, "gender": "male" },
    { "name": "Rada", "age": 26, "gender": "Female" },
    { "name": "vinod", "age": 18, "gender": "male" }


];

console.log(Object.keys(data[0]))

























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
//console.log(obj1.arrStr)

// function keyValuePrinter(obj) {
//     for (let key in obj) {
//         console.log(`The gievn object value ${obj[key]} is a ${typeof(obj[key])}`)
//     }

// }
// keyValuePrinter(obj1)