// Summation of Primes - Problem 010
// https://projecteuler.net/problem=10

/*
	The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
	Find the sum of all the primes below two million.
*/

import Arithmetic from "../000/Arithmetic";
import Prime from "../000/Prime";

function primeSummation(limit: number): number {
	const primeNumbers = Prime.generatePrimes(2, limit);
	const primeSum = Arithmetic.sum(primeNumbers);

	return primeSum;
}

console.log(primeSummation(2_000_000));
