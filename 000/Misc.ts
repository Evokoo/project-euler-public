/**
 * Utility helper class for functions that don't quite fit elsewhere
 */
export default class Misc {
	/**
	 * Check if a string or number is a palindrome
	 * @param {number | string} input - String or number to test
	 * @param {boolean} [caseInsenstive = true] - Set case senestivity
	 * @returns {boolean} Indication if the input is a palindrome
	 * @example
	 * Misc.isPalindrome("level") returns true;
	 * Misc.isPalindrome("Level", false) returns false; //Test is case senstive
	 * Misc.isPalindrom("car") returns false
	 */

	static isPalindrome(
		input: string | number,
		caseInsenstive: boolean = true
	): boolean {
		let chars: string[] = [...String(input)];

		for (let i = 0, j = chars.length - 1; i < j; i++, j--) {
			const charA: string = caseInsenstive ? chars[i].toLowerCase() : chars[i];
			const charB: string = caseInsenstive ? chars[j].toLowerCase() : chars[j];

			if (charA !== charB) return false;
		}

		return true;
	}

	/**
	 * Generate all unique permutations of a `number` or `string`
	 * @param {number | string} input - `string` or `number` to permutate
	 * @returns {Array<string>} Array containing all unique permutations
	 * @example
	 * Misc.getPermutations("112") returns [ "112", "211", "121" ]
	 * Misc.getPermutations(122) returns [ "122", "212", "221" ]
	 */

	static getPermutations(input: string | number): string[] {
		const output: Set<string> = new Set();
		const chars: string[] =
			typeof input === "number" ? [...String(input)] : [...input];

		generate(chars.length, chars.slice(0));

		function swap(arr: string[], a: number, b: number): string[] {
			return ([arr[a], arr[b]] = [arr[b], arr[a]]);
		}

		function generate(len: number, arr: string[]) {
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
		}

		return [...output];
	}
}
