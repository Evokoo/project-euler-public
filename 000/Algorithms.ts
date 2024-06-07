/**
 * Binary Search Class
 */

//TODO: Add validation - input must be sorted and cannot be empty

export class BinarySearch {
	private searchArr: number[];
	private searchArrLen: number;

	/**
	 * Preform a binary search on a `SORTED` array.
	 * @param {Array<number>} numbers - Array to search
	 */
	constructor(numbers: number[]) {
		this.searchArr = numbers;
		this.searchArrLen = numbers.length;
	}

	/**
	 * Find the last index < `value`
	 * @param {number} value - Target value
	 * @returns {number} Last index < `value`
	 */
	lessThan(value: number): number {
		let l = 0;
		let r = this.searchArrLen - 1;

		while (l <= r) {
			const m = Math.floor((l + r) / 2);

			if (this.searchArr[m] < value) {
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
	 * @returns {number} First index > `value`
	 */
	greaterThan(value: number): number {
		let l = 0;
		let r = this.searchArrLen - 1;

		while (l <= r) {
			const m = Math.floor((l + r) / 2);

			if (this.searchArr[m] <= value) {
				l = m + 1;
			} else {
				r = m - 1;
			}
		}

		return l;
	}

	/**
	 * Find the index of a `value`
	 * @param {number} value - Number to find in arr
	 * @returns {number} Index of `value` or `-1` if `value` not found
	 */
	indexOfN(value: number): number {
		let l = 0;
		let r = this.searchArrLen - 1;

		while (l <= r) {
			const m = Math.floor((l + r) / 2);

			if (this.searchArr[m] === value) {
				return m;
			} else if (this.searchArr[m] < value) {
				l = m + 1;
			} else {
				r = m - 1;
			}
		}

		return -1;
	}
}
