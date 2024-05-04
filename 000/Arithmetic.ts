/**
 * Utility helper class for Arithemtic
 */
export default class Arithmetic {
	/**
	 * Get the sum total of a number array
	 * @param {Array<number>} numbers - Numbers to sum
	 * @param {number} [initialValue = 0] - Initial sum value (Optional)
	 * @returns {number} Sum of the number array
	 */
	static sum(numbers: number[], initialValue: number = 0): number {
		if (numbers.length === 0) return 0;
		return numbers.reduce((acc, cur) => acc + cur, initialValue);
	}

	/**
	 * Get the product of a number array
	 * @param {Array<number>} numbers - Numbers to multiply
	 * @param {number} [initialValue = 1] - Initial value (Optional)
	 * @returns {number} Product of the number array
	 */
	static product(numbers: number[], initialValue: number = 1): number {
		if (numbers.length === 0) return 0;
		return numbers.reduce((acc, cur) => acc * cur, initialValue);
	}

	/**
	 * Get the average of a number array
	 * @param {Array<number>} numbers - Array to find average of
	 * @returns {number} Average value of the number array
	 * @throws {RangeError} Input array canot be empty
	 */
	static average(numbers: number[]): number {
		if (numbers.length === 0) {
			throw RangeError("Number array cannot be empty");
		}

		return this.sum(numbers) / numbers.length;
	}

	/**
	 * Check if number is even
	 * @param {number} n - Number to check
	 * @returns {boolean} A message indicating if the number is even or not
	 */
	static isEven(n: number): boolean {
		return n % 2 === 0;
	}

	/**
	 * Check if number is odd
	 * @param {number} n - Number to check
	 * @returns {boolean} A message indicating if the number is odd or not
	 */
	static isOdd(n: number): boolean {
		return !this.isEven(n);
	}

	/**
	 * The sum of sequential numbers between the start and end range
	 * @param {number} start - Start value of range
	 * @param {number} end - End value of range
	 * @returns {number} Sum of the sequential number within the range
	 */
	static sequentialSum(start: number, end: number): number {
		const len: number = end - start + 1;
		return (len * (start + end)) / 2;
	}

	/**
	 * Generate numbers between and inclusive of start and end
	 * @param {number} start - Start value
	 * @param {number} end - End value
	 * @returns {Array<number>} Array containing numbers between start and end
	 * @example
	 * Arithmetic.generateRange(1, 5); // Returns [1, 2, 3, 4, 5]
	 * Arithmetic.generateRange(-1, -5); // Returns [-1, -2, -3, -4, -5]
	 * Arithmetic.generateRange(5, 1); // Returns [5, 4, 3, 2, 1]
	 */

	static generateRange(start: number, end: number): number[] {
		const range: number[] = [];

		if (start > end) {
			end--;
		} else {
			end++;
		}

		for (let i = start; i !== end; start < end ? i++ : i--) {
			range.push(i);
		}

		return range;
	}

	/**
	 * Add two or more string INTEGERS together
	 * Useful for large numbers where scientific notation is not suitable
	 * @param {Array<string>} numbers - Array of string numbers
	 * @throws {TypeError} Input strings must onlyu contain 0-9
	 * @returns {string} Sum of the input array
	 */
	static stringAddition(numbers: string[]): string {
		// Validate numbers, if valid sort by length
		if (numbers.some((number) => !/^\d+$/.test(number))) {
			throw TypeError("Strings can only contain digits 0-9");
		} else {
			numbers.sort((a, b) => b.length - a.length);
		}

		let total: string = numbers.shift()!;

		for (let number of numbers) {
			const newTotal: string[] = [];
			const current = number.padStart(total.length, "0");

			let carry: number = 0;

			for (let i = total.length - 1; i >= 0; i--) {
				const n1: number = Number(total[i]);
				const n2: number = Number(current[i]);
				const n3: number = n1 + n2 + carry;

				if (i === 0) {
					newTotal.unshift(String(n3));
				} else {
					newTotal.unshift(String(n3 % 10));
					carry = n3 >= 10 ? 1 : 0;
				}
			}

			total = newTotal.join("");
		}

		return total;
	}

	/**
	 * Calculate the nth power of 2.
	 * Useful for scenarios where large exponential calculations are needed and scientific notation is not suitable.
	 * @param {number} exponent - The nth power to calculate to.
	 * @throws {RangeError} Exponent cannot be negative.
	 * @returns {string} The nth power of 2 as a string.
	 * @example
	 * Arithmetic.nthPowerOfTwo(5); // Returns "32"
	 */
	static nthPowerOfTwo(exponent: number): string {
		if (exponent < 0) {
			throw RangeError("Exponent cannot be negative");
		}

		if (exponent === 0) {
			return "1";
		}

		let total: string = "2";

		for (let e = 0; e < exponent - 1; e++) {
			const newTotal: string[] = [];

			let carry: number = 0;

			for (let d = total.length - 1; d >= 0; d--) {
				const product: number = Number(total[d]) * 2 + carry;

				if (d === 0) {
					newTotal.unshift(String(product));
				} else {
					newTotal.unshift(String(product % 10));
					carry = product >= 10 ? 1 : 0;
				}
			}

			total = newTotal.join("");
		}

		return total;
	}
}
