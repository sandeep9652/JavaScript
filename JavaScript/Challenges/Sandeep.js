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
console.log(primeNumber(1, 100))


var inputStr = "Hello world"
function firToUpCase(str) {
    const splitArr = str.split(" ");
    const newArr = splitArr.map((value) => {
        return value.charAt(0).toUpperCase() + value.slice(1)
    })
    return newArr.join(" ")

}
console.log(firToUpCase(inputStr))

