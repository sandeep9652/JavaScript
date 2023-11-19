
let text = 'Hi Vinod Paidakulawar How are you!';
console.log(text.length)
let vowel = text.match(/[aeiou]/ig).length;
let consonant = text.length - vowel;
console.log("")
// ? vowel++ : consonant++;
console.log(`Vowels ${vowel} and COnsonants ${consonant}`)

let arr = [1,34,56,78,911,25]
console.log(arr.sort((a,b)=> a-b))
console.log(arr.sort((a,b)=>b-a))
console.log(arr[1])

//console.log(text.toLowerCase().replace(' ', ' ').split(' ').sort().join())
// console.log(text.replace('Vinod', 'Sanvid'));
// console.log(text.replace(/vinod/ig, 'Hanmandlu'));
/*
let newStr = '';
for(let i =text.length - 1; i>=0; i--){
    
    newStr += text.charAt(i)
    
}
console.log(newStr)
let ch = text.split('').reverse()
console.log(ch.join())



function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
  }
  console.log(reverseString("hello Vinod Paidakulawar"));














/*

let Vinod = {
    designation : 'QA',
    age : 29,
    company : "bangalore",
    great: function(){
              console.log("Hi Good morning!")
    },
    hobbies : ['cricket', 'football', 'PUBG'],
     
    score :{
            tenth : 492,
            inter : 908,
            BTech : 'firstClass'
    },
}
console.log(Vinod)
Vinod.great()


function primeNumber(prime) {
    let count = 0;

    for (let i = 1; i <= prime; i++) {
        if (prime % i == 0)
            count++
    }

    count == 2 ? console.log("Prime") : console.log("Not a Prime")
}

primeNumber(15)
function prime(a, b) {
    let count1 = 0;
    for (let i = a; i <= b; i++) {
        for (let j = 1; j <= i; j++) {
            if (i % j == 0)
                count1++
        }
        if (count1 == 2)
            console.log(i);
        count1 = 0;
    }

}
prime(1, 10)*/