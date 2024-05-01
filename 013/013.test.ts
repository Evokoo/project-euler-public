import { test, expect, describe, beforeEach } from "bun:test";
import { nDigitOfLargeSum } from "./013";
import IO from "../000/IO";

describe("Method efficiency test", () => {
	let testNumbers: string[] = [];

	beforeEach(() => {
		testNumbers = IO.readFile("input").split("\r\n");
	});

	test("Solution 1 - String Addition", () => {
		expect(nDigitOfLargeSum(testNumbers, 10, 1)).toBe("5537376230");
	});

	test("Solution 2 - BigInt", () => {
		expect(nDigitOfLargeSum(testNumbers, 10, 2)).toBe("5537376230");
	});
});
