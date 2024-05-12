// Prime permutations - Problem 049
// https://projecteuler.net/problem=49

/*
	The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways: (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another.

	There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is one other 4-digit increasing sequence.

	What 12-digit number do you form by concatenating the three terms in this sequence?
*/

import Prime from "../000/Prime";

function arePermutations(numbers: number[]): boolean {
	const numberSet: Set<string> = new Set();

	for (let number of numbers) {
		const digits: string = [...String(number)].sort().join("");
		numberSet.add(digits);
	}

	return numberSet.size === 1;
}

function primePermutationSequence(): string {
	const validPrimes: number[] = Prime.generatePrimes(1000, 9999);
	const step: number = 3330;

	for (let prime of validPrimes) {
		const sequence: number[] = [prime];

		if (prime === 1487) continue;

		for (let i = 1; i <= 2; i++) {
			const nextPrime: number = prime + step * i;

			if (validPrimes.includes(nextPrime)) {
				sequence.push(nextPrime);
			} else {
				break;
			}
		}

		if (sequence.length === 3 && arePermutations(sequence)) {
			return sequence.join("");
		}
	}

	throw Error("Sequence not found...");
}

console.log(primePermutationSequence());
