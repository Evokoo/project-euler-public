import { test, expect, describe } from "bun:test";
import _053 from "./053/053";

describe("Project Euler Tests", () => {
	test("Problem 53", () => {
		expect(_053(1_000_000)).toBe(4075);
	});
});
