/**
 * Utility class for generating divisors of n
 */

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
				divisors.push(n / i);
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
}
