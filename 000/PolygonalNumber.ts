/**
 * Ultitliy class for generating Polygonal Numbers
 */

export default class PolygonalNumber {
	/**
	 * Generate the nth Triangle number
	 * @param {number} n - nth number to get
	 * @returns {number} nth Triangle number
	 */
	static triangle = (n: number): number => {
		return (n * (n + 1)) / 2;
	};

	/**
	 * Generate the nth Square number
	 * @param {number} n - nth number to get
	 * @returns {number} nth Square number
	 */
	static square = (n: number): number => {
		return n * n;
	};

	/**
	 * Generate the nth Pentagonal number
	 * @param {number} n - nth number to get
	 * @returns {number} nth Pentagonal number
	 */
	static pentagonal = (n: number): number => {
		return (n * (3 * n - 1)) / 2;
	};

	/**
	 * Check if number is pentagonal
	 * @param {number} n - `number` to test
	 * @returns {boolean} Indication if input `number` is pentagonal
	 */
	static isPentagonal = (n: number): boolean => {
		return Number.isInteger((1 + Math.sqrt(1 + 24 * n)) / 6);
	};

	/**
	 * Generate the nth Hexagonal number
	 * @param {number} n - nth number to get
	 * @returns {number} nth Hexagonal number
	 */
	static hexagonal = (n: number): number => {
		return n * (2 * n - 1);
	};

	/**
	 * Check if number is hexagonal
	 * @param {number} n - `number` to test
	 * @returns {boolean} Indication if input `number` is hexagonal
	 */
	static isHexagonal = (n: number): boolean => {
		return Number.isInteger((Math.sqrt(8 * n + 1) + 1) / 4);
	};

	/**
	 * Generate the nth Heptagonal number
	 * @param {number} n - nth number to get
	 * @returns {number} nth Heptagonal number
	 */
	static heptagonal = (n: number): number => {
		return (n * (5 * n - 3)) / 2;
	};

	/**
	 * Generate the nth Octagonal number
	 * @param {number} n - nth number to get
	 * @returns {number} nth Octagonal number
	 */
	static octagonal = (n: number): number => {
		return n * (3 * n - 2);
	};

	/**
	 * Generate polygonal numbers between a minimum and maximum value.
	 * @param {number} min - The minimum range value.
	 * @param {number} max - The maximum range value.
	 * @param {number} polygon - The type of polygon (3 for triangular, 4 for square, etc.).
	 * @returns {Array<number>} An array containing the chosen polygonal numbers between min and max.
	 * @throws {RangeError} If min is less than 1 or if polygon is not in the range 3 to 8.
	 */
	static generateRange(min: number, max: number, polygon: number): number[] {
		if (min < 1) throw RangeError("Min must be >= 1 ");

		let generateFn: Function;

		switch (polygon) {
			case 3:
				generateFn = this.triangle;
				break;
			case 4:
				generateFn = this.square;
				break;
			case 5:
				generateFn = this.pentagonal;
				break;
			case 6:
				generateFn = this.hexagonal;
				break;
			case 7:
				generateFn = this.heptagonal;
				break;
			case 8:
				generateFn = this.octagonal;
				break;
			default:
				throw RangeError("Polygon must be >= 3 and <= 8");
		}

		const output: number[] = [];

		for (let i = min; i < max; i++) {
			output.push(generateFn(i));
		}

		return output;
	}
}
