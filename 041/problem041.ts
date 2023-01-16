// Pandigital prime - Problem 041
// https://projecteuler.net/problem=41

/*
We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.
What is the largest n-digit pandigital prime that exists?
*/

export function isPrime(n: number): boolean {
	let max: number = Math.sqrt(n);

	for (let i = 2; i <= max; i++) {
		if (n % i === 0) return false;
	}

	return n > 1;
}

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

let largetPrime: number = null;

for (let i = 9; i > 1; i--) {
	const range: number[] = Array.from({ length: i }, (_, i) => i + 1);

	let permutations: number[] = getPermutations(range)
		.map(Number)
		.sort((a, b) => b - a);

	for (let n of permutations) {
		if (isPrime(n)) {
			largetPrime = n;
			break;
		}
	}

	if (largetPrime) {
		console.log(largetPrime);
		break;
	}
}
