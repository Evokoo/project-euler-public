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

	/**
	 * Rotates the input `string` or `number` in the specified direction for a certain number of steps.
	 * If steps are not provided, rotates infinitely until the sequence repeats.
	 *
	 * @template T - Type of the input (`string` or `number`).
	 * @param {T} input - The input to be rotated.
	 * @param {string} direction - The direction of rotation. "L" for left and "R" for right.
	 * @param {number} [steps=Infinity] - The number of steps to rotate. Defaults to Infinity.
	 * @throws {RangeError} - If the input number is negative.
	 * @throws {TypeError} - If the direction is neither "L" nor "R".
	 * @returns {T[] | T} Array of rotated inputs if finite steps provided, or last rotated input if steps are infinite.
	 * @example
	 *
	 * Misc.rotateInput("Test", "R") returns ["Test", "tTes", "stTe", "estT"]
	 * Misc.rotateInput("Test", "L") returns ["Test", "estT", "stTe", "tTes"]
	 * Misc.rotateInput("Test", "R", 2) returns "stTe"
	 *
	 * Misc.rotateInput("1234", "R") returns [1234, 4123, 3412, 2341]
	 * Misc.rotateInput("1234", "L") returns [1234, 4123, 3412, 2341]
	 * Misc.rotateInput("1234", "R", 2) returns 3412
	 */
	static rotateInput<T extends string | number>(
		input: T,
		direction: string,
		steps: number = Infinity
	): T[] | T {
		if (typeof input === "number" && input < 0) {
			throw RangeError("Input number must be >= 0");
		}

		if (typeof input === "string" && input.length === 0) {
			return "" as T;
		}

		if (direction !== "R" && direction !== "L") {
			throw TypeError("Direction must be L (left) or R (right)");
		}

		const rotations: Set<T> = new Set([input]);
		const characters: string[] = [...String(input)];

		for (let step = 0; step < steps; step++) {
			if (direction === "R") {
				characters.push(characters.shift()!);
			} else {
				characters.unshift(characters.pop()!);
			}

			const rotation =
				typeof input === "string"
					? (characters.join("") as T)
					: (Number(characters.join("")) as T);

			if (rotations.has(rotation)) {
				break;
			} else {
				rotations.add(rotation);
			}
		}

		if (steps === Infinity) {
			return [...rotations];
		} else {
			return [...rotations].at(-1) as T;
		}
	}
}
