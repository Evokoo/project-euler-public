/**
 * Calculates the factorial of a number or a bigint.
 * @template T - The type of the input. Must extend `number` or `bigint`.
 * @param {T} n - The number or bigint for which to calculate the factorial.
 * @returns {T} The factorial of the input value.
 * @throws {TypeError} If `n` is not a number or a bigint.
 */

export default function factorial<T extends number | bigint>(n: T): T {
	if (typeof n === "number") {
		if (n === 0) return 1 as T;
		return (n * factorial(n - 1)) as T;
	} else if (typeof n === "bigint") {
		if (n === 0n) return 1n as T;
		return (n * factorial(n - 1n)) as T;
	} else {
		throw TypeError("n is an invalid type");
	}
}
