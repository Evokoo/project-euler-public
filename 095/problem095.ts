// Amicable chains - Problem 095
// https://projecteuler.net/problem=95

/*
The proper divisors of a number are all the divisors excluding the number itself. For example, the proper divisors of 28 are 1, 2, 4, 7, and 14. As the sum of these divisors is equal to 28, we call it a perfect number.

Interestingly the sum of the proper divisors of 220 is 284 and the sum of the proper divisors of 284 is 220, forming a chain of two numbers. For this reason, 220 and 284 are called an amicable pair.

Perhaps less well known are longer chains. For example, starting with 12496, we form a chain of five numbers:

12496 → 14288 → 15472 → 14536 → 14264 (→ 12496 → ...)

Since this chain returns to its starting point, it is called an amicable chain.

Find the smallest member of the longest amicable chain with no element exceeding one million.
*/

const divisors: Map<number, number[]> = new Map();

function getSum(input: number[]): number {
	return input.reduce((acc, cur) => acc + cur, 0);
}

function getProperDivisors(n: number): number {
	let properDivisors: Set<number> = new Set([1]);

	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			properDivisors.add(i);
			properDivisors.add(n / i);
		}
	}

	divisors.set(n, Array.from(properDivisors));
	return 0;
}

for (let i = 2; i < 1000; i++) {
	getProperDivisors(i);
}

console.log(divisors);
