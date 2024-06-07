// Prime Summations - Problem 077
// https://projecteuler.net/problem=77

/*
It is possible to write ten as the sum of primes in exactly five different ways:

7 + 3
5 + 5
5 + 3 + 2
3 + 3 + 2 + 2
2 + 2 + 2 + 2 + 2

What is the first value which can be written as the sum of primes in over five thousand different ways?
*/

import Prime from "../000/Prime";

function countCombinations(target: number, numbers: number[]): number {
	let dp: number[] = Array.from({ length: target + 1 }, (_) => 0);
	dp[0] = 1;

	for (let n of numbers) {
		for (let i = n; i <= target; i++) {
			dp[i] += dp[i - n];
		}
	}

	return dp[target];
}

function primeSummationCount(target: number) {
	const primes: number[] = Prime.generatePrimes(2, 100);

	for (let i = 10; true; i++) {
		const combinations = countCombinations(i, primes);

		if (combinations >= target) {
			return i;
		}
	}
}

console.log(primeSummationCount(5000));
