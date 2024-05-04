// 1000-digit Fibonacci Number - Problem 025
// https://projecteuler.net/problem=25

/*
	The Fibonacci sequence is defined by the recurrence relation:

	Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
	Hence the first 12 terms will be:

	F1 = 1
	F2 = 1
	F3 = 2
	F4 = 3
	F5 = 5
	F6 = 8
	F7 = 13
	F8 = 21
	F9 = 34
	F10 = 55
	F11 = 89
	F12 = 144
	The 12th term, F12, is the first term to contain three digits.

	What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
*/

function nDigitFibonacciNumber(len: number): number {
	const arr: bigint[] = [1n, 1n, 2n];

	while (true) {
		const n = arr.at(-1)! + arr.at(-2)!;

		if (String(n).length === len) {
			return arr.length + 1;
		} else {
			arr.push(n);
		}
	}
}

console.log(nDigitFibonacciNumber(2000));
