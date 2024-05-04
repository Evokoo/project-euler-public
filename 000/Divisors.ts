/**
 * Utility class for generating divisors of n
 *
 */

import Arithmetic from "./Arithmetic";

export default class Divisors {
	/**
	 * Generate all divisors of n.
	 * @param {number} n - The number for which to generate divisors.
	 * @returns {Array<number>} An array containing all divisors of n.
	 */

	static all(n: number): number[] {
		const divisors: number[] = [];

		for (let i = 1; i <= Math.sqrt(n); i++) {
			if (n % i === 0) {
				divisors.push(i);

				if (i !== n / i) {
					divisors.push(n / i);
				}
			}
		}

		return divisors.sort((a, b) => a - b);
	}

	/**
	 * Generate all proper divisors of n.
	 * @param {number} n - The number for which to generate divisors.
	 * @returns {Array<number>} An array containing all divisors of n excluding n.
	 */

	static proper(n: number): number[] {
		return this.all(n).slice(0, -1);
	}

	/**
	 * Get the sum of all n's divisors
	 * @param {number} n - The number for which to generate divisors
	 * @returns {number} Sum of the n's divisors
	 * @example
	 * divisorSum(12); // Returns 28 (1 + 2 + 3 + 4 + 6 + 12 = 28)
	 * @borrows sum from Arithmetic Class
	 */

	private static divisorSum(n: number): number {
		const divisors: number[] = this.all(n);
		const sum: number = Arithmetic.sum(divisors);
		return sum;
	}

	/**
	 * Check if number is a perfect number
	 * @param {number} n - number to test
	 * @returns {boolean} Indication if the number is Perfect
	 */
	static isPerfect(n: number): boolean {
		const sum: number = this.divisorSum(n) - n;
		return sum === n;
	}
	/**
	 * Check if number is an abundant number
	 * @param {number} n - number to test
	 * @returns {boolean} Indication if the number is Abundant
	 */
	static isAbundant(n: number): boolean {
		const sum: number = this.divisorSum(n) - n;
		return sum > n;
	}
	/**
	 * Check if number is a deficient number
	 * @param {number} n - number to test
	 * @returns {boolean} Indication if the number is Deficient
	 */
	static isDeficient(n: number): boolean {
		const sum: number = this.divisorSum(n) - n;
		return sum < n;
	}
}
