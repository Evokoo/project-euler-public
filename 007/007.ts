// 10001st Prime - Problem 007
// https://projecteuler.net/problem=7

/*
	By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
	What is the 10,001st prime number?
*/

import Prime from "../000/Prime";

const n = 10_001;
const nthPrime = Prime.nthPrime(n);

console.log(nthPrime);
