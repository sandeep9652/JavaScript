//************ Reverse String ***********
/*function reverseString(str) {
    return str.split("").reverse().join();
}
console.log(reverseString("Hello"));


function stringReverse(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr
}
console.log(stringReverse("Hello Vinod"));

//**************Prime Number*********** 
let count = 0;
let i, j;
for (j = 2; j <= 100; j++) {
    for (i = 1; i <= j; i++) {
        if (j % i == 0)
            count++;

    }
    if (count == 2)
        console.log(j);
    count = 0;


} */
//***********************Print Rectangle */
let row=5;
let column = 6;
let symbol;
symbol = 5;
for(let i=1; i<=row; i++){
    for(let j=1; j<=column; j++){
        process.stdout.write(symbol);
    }
    console.log("\n")
}
