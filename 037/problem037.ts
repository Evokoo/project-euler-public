// Truncatable primes - Problem 037
// https://projecteuler.net/problem=37

/*
The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes
*/

export function isPrime(n: number): boolean {
	let max: number = Math.sqrt(n);

	for (let i = 2; i <= max; i++) {
		if (n % i === 0) return false;
	}

	return n > 1;
}

export function primeParts(n: number): boolean {
	let digits: string = String(n);

	for (let i = 1; i < digits.length; i++) {
		let tail = +digits.slice(i),
			head = +digits.slice(0, -i);

		if (isPrime(head) && isPrime(tail)) {
			continue;
		} else {
			return false;
		}
	}
	return true;
}

const primes: Set<number> = new Set();

let n: number = 10,
	sum: number = 0;

while (primes.size < 11) {
	if (isPrime(n) && primeParts(n)) {
		primes.add(n);
		sum += n;
	}
	n++;
}

console.log(sum);
