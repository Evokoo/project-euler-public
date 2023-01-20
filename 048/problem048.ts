// Self powers - Problem 048
// https://projecteuler.net/problem=48

/*
The series, 11 + 22 + 33 + ... + 1010 = 10405071317.

Find the last ten digits of the series, 11 + 22 + 33 + ... + 10001000.
*/

let sum: bigint = 0n;

for (let i = 1n; i <= 1000n; i++) {
	sum += BigInt(i ** i);
}

const digits = String(sum).slice(-10);
console.log(digits);
