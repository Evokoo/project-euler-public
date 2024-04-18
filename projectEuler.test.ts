import { test, expect, describe } from "bun:test";
import _051 from "./051/051";
import _053 from "./053/053";

describe("Project Euler Tests", () => {
	test("Problem 51", () => {
		expect(_051(8)).toBe(121313);
	});
	test("Problem 53", () => {
		expect(_053(1_000_000)).toBe(4075);
	});
});
