export default function getPermutations(input: number[]): string[] {
	const output: Set<string> = new Set();

	const swap = (arr: number[], a: number, b: number): number[] => {
		return ([arr[a], arr[b]] = [arr[b], arr[a]]);
	};

	const generate = (len: number, arr: number[]) => {
		if (len === 1) {
			output.add(arr.slice().join(""));
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

	return [...output];
}
