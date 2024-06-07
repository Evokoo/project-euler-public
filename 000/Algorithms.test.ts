import { test, expect, describe } from "bun:test";
import { BinarySearch } from "./Algorithms";

describe("Binary Search Tests", () => {
	const inputArr: number[] = [0, 1, 2, 3, 4, 5, 6];
	const search: BinarySearch = new BinarySearch(inputArr);

	test("Less Than", () => {
		const index: number = search.lessThan(5);
		const slice: number[] = inputArr.slice(0, index);

		expect(index).toBe(5);
		expect(slice).toEqual([0, 1, 2, 3, 4]);
	});

	test("Greater Than", () => {
		const index: number = search.greaterThan(3);
		const slice: number[] = inputArr.slice(index);

		expect(index).toBe(4);
		expect(slice).toEqual([4, 5, 6]);
	});

	test("Index of N", () => {
		const index: number = search.indexOfN(2);
		expect(index).toBe(2);

		const notFound: number = search.indexOfN(10);
		expect(notFound).toBe(-1);
	});
});
