// Permuted multiples - Problem 52
// https://projecteuler.net/problem=52

/*
	It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.

	Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.
*/

function permutatedMulitples(multiples: number[]) {
	for (let i = 1; true; i++) {
		const productStrings: string[] = multiples.map((n) =>
			[...String(n * i)].sort().join("")
		);

		if (productStrings.every((str, _, strings) => str === strings[0])) {
			return i;
		}
	}

	throw Error("Number not found...");
}

console.log(permutatedMulitples([1, 2, 3, 4, 5, 6]));
