// Coin sums - Problem 031
// https://projecteuler.net/problem=31

/*
	In the United Kingdom the currency is made up of pound (£) and pence (p). There are eight coins in general circulation:

	1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).
	It is possible to make £2 in the following way:

	1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
	How many different ways can £2 be made using any number of coins?
*/

function getCombinations(total: number, coins: number[]): number {
	let ways: number[] = new Array(total + 1).fill(0);

	ways[0] = 1;

	for (let i = 0; i < coins.length; i++) {
		for (let j = 0; j < ways.length; j++) {
			if (coins[i] <= j) {
				ways[j] += ways[j - coins[i]];
			}
		}
	}

	return ways[total];
}

console.log(getCombinations(200, [1, 2, 5, 10, 20, 50, 100, 200]));
