// Pandigital prime - Problem 041
// https://projecteuler.net/problem=41

/*
	We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.
	What is the largest n-digit pandigital prime that exists?
*/

import Arithmetic from "../000/Arithmetic";
import Misc from "../000/Misc";
import Prime from "../000/Prime";

function largestPandigitalPrime() {
	let largest: number = -1;

	for (let i = 0; i < 10; i++) {
		const permutations: string[] = Misc.getPermutations("987654321".slice(i));

		for (let permutation of permutations) {
			const n: number = Number(permutation);

			if (Prime.isPrime(n) && Arithmetic.isPandigital(n) && n > largest) {
				largest = n;
			}
		}

		if (largest !== -1) {
			return largest;
		}
	}

	throw Error("Something went wrong...");
}

console.log(largestPandigitalPrime());
