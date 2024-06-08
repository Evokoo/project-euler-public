// Coin Partitions - Problem 078
// https://projecteuler.net/problem=78

/*
Let p(n) represent the number of different ways in which n coins can be separated into piles. For example, five coins can be separated into piles in exactly seven different ways, so p(5) = 7.

Find the least value of n for which p(n) is divisible by one million.
*/

function partition(length: number): bigint[] {
	const partitions = Array.from({ length: length + 1 }, () => 0n);

	partitions[0] = 1n;

	for (let i = 1; i <= length; i++) {
		for (let j = i; j <= length; j++) {
			partitions[j] += partitions[j - i];
		}

		console.log({ i, count: partitions[i] });

		// if (partitions[i] > 1_000_000n && partitions[i] % 1_000_000n === 0n) {
		// 	console.log({ i });
		// 	throw Error("Found");
		// }
	}

	return partitions;
}

const partitionCount = partition(10);
