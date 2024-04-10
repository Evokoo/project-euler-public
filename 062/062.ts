// Cubic Permutations - Problem 062
// https://projecteuler.net/problem=62

/*
The cube, 41063625 (345 ^ 3), can be permuted to produce two other cubes: 56623104 (384 ^ 3) and 66430125 (405 ^ 3). 
In fact, 41063625 is the smallest cube which has exactly three permutations of its digits which are also cube.

Find the smallest cube for which exactly five permutations of its digits are cube.
*/

function generateCubeNumbers(min: number, max: number): Map<string, number[]> {
	const cubeNumbers: Map<string, number[]> = new Map();

	for (let i = min; i <= max; i++) {
		const cubeNumber = i ** 3;
		const n = [...String(cubeNumber)].sort().join("");

		if (n.length >= 8) {
			cubeNumbers.set(n, [...(cubeNumbers.get(n) ?? []), i]);
		}
	}

	return cubeNumbers;
}

export function findSmallestValidCubeNumber(target: number): number {
	const cubeNumbers = generateCubeNumbers(1, 10_000);

	for (let [_, permutations] of cubeNumbers) {
		if (permutations.length === target) {
			return Math.min(...permutations) ** 3;
		}
	}

	throw Error("Cube number not found - Try increasing the max range");
}

console.log(findSmallestValidCubeNumber(5));
