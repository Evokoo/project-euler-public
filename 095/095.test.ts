import { test, expect, describe } from "bun:test";
import { amicableChainMinValue, getDivisors } from "./095";
import getSum from "../000/getSum";

describe("Divisor test", () => {
	const divisors = getDivisors(12496);
	const divisorsArr = [
		1, 2, 4, 8, 11, 16, 22, 44, 71, 88, 142, 176, 284, 568, 781, 1136, 1562,
		3124, 6248,
	];
	const sumResult = 14288;

	test("Correct Divisors", () => {
		expect(divisors).toEqual(divisorsArr);
	});

	test("Correct Sum", () => {
		expect(getSum(divisors)).toBe(sumResult);
	});
});

describe("Benchmark", () => {
	test("Runtime", () => {
		expect(amicableChainMinValue(1_000_000)).toBe(14316);
	});
});
