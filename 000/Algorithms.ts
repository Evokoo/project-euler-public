/**
 * Binary Search Class
 */

//TODO: Add validation - input must be sorted and cannot be empty

export class BinarySearch {
	/**
	 * Find the last index < `value`
	 * @param {number} value - Target value
	 * @param {Array<number>} arr - Array to search
	 * @returns {number} Last index < `value`
	 */
	static lessThan(value: number, arr: number[]): number {
		let l = 0;
		let r = arr.length - 1;

		while (l <= r) {
			const m = Math.floor((l + r) / 2);

			if (arr[m] < value) {
				l = m + 1;
			} else {
				r = m - 1;
			}
		}

		return l;
	}

	/**
	 * Find the first index > `value`
	 * @param {number} value - Target value
	 * @param {Array<number>} arr - Array to search
	 * @returns {number} First index > `value`
	 */
	static greaterThan(value: number, arr: number[]): number {
		let l = 0;
		let r = arr.length - 1;

		while (l <= r) {
			const m = Math.floor((l + r) / 2);

			if (arr[m] <= value) {
				l = m + 1;
			} else {
				r = m - 1;
			}
		}

		return l;
	}

	/**
	 * Find the index of a `value`
	 * @param {number} value - Target value
	 * @param {Array<number>} arr - Array to search
	 * @returns {number} Index of `value` or `-1` if `value` not found
	 */
	static indexOfN(value: number, arr: number[]): number {
		let l = 0;
		let r = arr.length - 1;

		while (l <= r) {
			const m = Math.floor((l + r) / 2);

			if (arr[m] === value) {
				return m;
			} else if (arr[m] < value) {
				l = m + 1;
			} else {
				r = m - 1;
			}
		}

		return -1;
	}
}
