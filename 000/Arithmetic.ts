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

	// Add two string INTEGERS together
	// Useful for very large numbers
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
}
