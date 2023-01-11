// Problem 24
// https://projecteuler.net/problem=24

/*

A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

*/

export function getPermutations(input: number[]): string[] {
	const output: string[] = [];

	const swap = (arr: number[], a: number, b: number): number[] => {
		return ([arr[a], arr[b]] = [arr[b], arr[a]]);
	};

	const generate = (len: number, arr: number[]) => {
		if (len === 1) {
			output.push(arr.slice().join(""));
			return;
		}

		generate(len - 1, arr);

		for (let i = 0; i < len - 1; i++) {
			if (len % 2 === 0) {
				swap(arr, i, len - 1);
			} else {
				swap(arr, 0, len - 1);
			}
			generate(len - 1, arr);
		}
	};

	generate(input.length, input.slice());

	return output;
}

let sortedPermutations = getPermutations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).sort(
	(a, b) => +a - +b
);

console.log(sortedPermutations[999_999]);
