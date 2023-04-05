for (let n = 2; n <= 10; n++) {
    let isprime = true
    let i = 2
    while (i < n) {
        if (n % i == 0) {
            isprime = false
        }
        i++
    }
    if (isprime == true) {
        console.log(n)
    }
}

// for (let i = 2; i <= 100; i++) {
//     for (let j = 2; j < i - 1; j++) {
//         if (i % j == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(i);
//     }
//     isPrime = true;
// }