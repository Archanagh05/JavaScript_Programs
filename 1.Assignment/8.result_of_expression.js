let a = 5,
    b = 4
let c = a > b
console.log("a. 5 > 4 : " + c)

let d = "apple",
    e = "pineapple"
let f = d > e
console.log("b. apple > pineapple : " + f)

let g = "2",
    h = "12"
let i = g > h
console.log("c. 2 > 12 : " + i)

let j
let k = null
let l = j == k
console.log("d. undefined == null : " + l)

let m = j === k
console.log("e. undefined === null : " + m)

let n = "\n0\n"
let o = k == n
console.log("f. " + o)

let p = k === +n
console.log("g. " + p)