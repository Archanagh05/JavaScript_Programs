let start = 'A'
let end = 'Z'
let a = start.codePointAt(0)
let b = end.codePointAt(0)
while (a <= b) {

    console.log(String.fromCharCode(a) + " = " + a)
    a++
}