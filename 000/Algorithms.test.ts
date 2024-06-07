import { test, expect, describe } from "bun:test";
import { BinarySearch } from "./Algorithms";

describe("Binary Search Tests", () => {
	const arr: number[] = [0, 1, 2, 3, 4, 5, 6];

	test("Less Than", () => {
		const index: number = BinarySearch.lessThan(5, arr);
		const slice: number[] = arr.slice(0, index);

		expect(index).toBe(5);
		expect(slice).toEqual([0, 1, 2, 3, 4]);
	});

	test("Greater Than", () => {
		const index: number = BinarySearch.greaterThan(3, arr);
		const slice: number[] = arr.slice(index);

		expect(index).toBe(4);
		expect(slice).toEqual([4, 5, 6]);
	});

	test("Index of N", () => {
		const index: number = BinarySearch.indexOfN(2, arr);
		expect(index).toBe(2);

		const notFound: number = BinarySearch.indexOfN(10, arr);
		expect(notFound).toBe(-1);
	});

	describe("Validation", () => {
		test("Empty Array", () => {
			expect(() => BinarySearch.lessThan(0, [])).toThrowError(
				"Array cannot be empty"
			);
		});

		test("Unorderd Array", () => {
			expect(() => BinarySearch.lessThan(0, [0, 2, 1])).toThrowError(
				"Array is not sorted"
			);
		});
	});
});
