import { test, expect, describe } from "bun:test";
import _051 from "./051/051";
import _053 from "./053/053";
import _061 from "./061/061";

describe("Project Euler Tests", () => {
	test("Problem 51", () => {
		expect(_051(8)).toBe(121313);
	});
	test("Problem 53", () => {
		expect(_053(1_000_000)).toBe(4075);
	});
	test("Problem 61", () => {
		expect(_061()).toBe(28684);
	});
});
