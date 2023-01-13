// Circular primes - Problem 035
// https://projecteuler.net/problem=35

/*
The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below one million?
*/

const circularPrimes: Set<number> = new Set([2]);

export function isPrime(n: number): boolean {
	let max: number = Math.sqrt(n);

	for (let i = 2; i <= max; i++) {
		if (n % i === 0) return false;
	}

	return n > 1;
}

export function rotateNumber(n: number): number[] {
	let rotations: number[] = [n],
		digits: number[] = [...String(n)].map(Number);

	for (let i = 0; i < digits.length - 1; i++) {
		digits = digits.concat(digits.shift());
		rotations.push(+digits.join(""));
	}

	return rotations;
}

for (let i = 3; i < 1_000_000; i++) {
	if (i % 2 === 0 || circularPrimes.has(i) || !isPrime(i)) continue;

	let rotations = rotateNumber(i);

	if (rotations.every(isPrime)) {
		for (let n of rotations) {
			circularPrimes.add(n);
		}
	}
}

console.log(circularPrimes);
