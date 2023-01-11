// Problem 025
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

export function getLastNum(arr: bigint[]): string {
	return String(arr[arr.length - 1]);
}

let nums: bigint[] = [1n, 1n, 2n],
	index: number = 3;

while (getLastNum(nums).length < 1000) {
	let n1 = nums[nums.length - 1],
		n2 = nums[nums.length - 2],
		n3 = n1 + n2;

	nums.push(n3);
	index++;
}

console.log(index);
