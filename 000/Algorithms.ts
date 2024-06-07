/**
 * Binary Search Class
 */

//TODO: DRY Princples - make private method to handle opertions as they share much the same code.

export class BinarySearch {
	/**
	 * @private Validates the input array.
	 * @param {Array<number>} arr - The input array to validate.
	 * @throws {RangeError} If the input array is empty.
	 * @throws {Error} If the input array is not sorted.
	 */
	private static validateInput(arr: number[]): void {
		if (arr.length === 0) {
			throw RangeError("Array cannot be empty");
		}

		const acending: boolean = arr.at(0)! < arr.at(-1)!;

		for (let i = 1; i < arr.length; i++) {
			if (acending) {
				if (arr[i] < arr[i - 1]) {
					throw Error("Array is not sorted");
				}
			} else {
				if (arr[i] > arr[i - 1]) {
					throw Error("Array is not sorted");
				}
			}
		}
	}

	/**
	 * Find the last index < `value`
	 * @param {number} value - Target value
	 * @param {Array<number>} arr - Array to search
	 * @returns {number} Last index < `value`
	 */
	static lessThan(value: number, arr: number[]): number {
		BinarySearch.validateInput(arr);

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
