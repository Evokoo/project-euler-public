// Largest Prime Factor - Problem 003
// https://projecteuler.net/problem=3

/*
The prime factors of 13195 are 5, 7, 13 and 29. 
What is the largest prime factor of the number 600851475143?
*/

import Prime from "../000/Prime";

function largestPrimeFactor(n: number): number {
	return Math.max(...Prime.primeFactors(n));
}

console.log(largestPrimeFactor(600851475143));
