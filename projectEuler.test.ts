import { test, expect, describe } from "bun:test";
import _051 from "./051/051";
import _053 from "./053/053";
import _061 from "./061/061";
import _075 from "./075/075";
import _069 from "./069/069";
import _070 from "./070/070";

describe("Project Euler Tests", () => {
	test("051", () => {
		expect(_051(8)).toBe(121313);
	});
	test("053", () => {
		expect(_053(1_000_000)).toBe(4075);
	});
	test("061", () => {
		expect(_061()).toBe(28684);
	});
	test("069", () => {
		expect(_069(1_000_000).n).toBe(510510);
	});
	test("070", () => {
		expect(_070(10_000_000)).toBe(8319823);
	});
	test("075", () => {
		expect(_075(1_500_000)).toBe(161667);
	});
});
