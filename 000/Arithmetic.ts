// Basic arithmetic operations
export default class Arithmetic {
	// Sum an array of numbers
	static sum(numbers: number[], initialValue: number = 0): number {
		if (numbers.length === 0) return 0;
		return numbers.reduce((acc, cur) => acc + cur, initialValue);
	}

	// Mulitply an array of numbers
	static product(numbers: number[], initialValue: number = 1): number {
		if (numbers.length === 0) return 0;
		return numbers.reduce((acc, cur) => acc * cur, initialValue);
	}

	// Get average value of array
	static average(numbers: number[]): number {
		if (numbers.length === 0) {
			throw RangeError("Number array cannot be empty");
		}

		return this.sum(numbers) / numbers.length;
	}

	// Check if number is odd or even
	static isEven(n: number): boolean {
		return n % 2 === 0;
	}
	static isOdd(n: number): boolean {
		return !this.isEven(n);
	}

	// Sequential sum, the total of numbers from n to m
	static sequentialSum(start: number, end: number): number {
		const len: number = end - start + 1;
		return (len * (start + end)) / 2;
	}
}
