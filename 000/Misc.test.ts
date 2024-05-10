import { test, expect, describe } from "bun:test";
import Misc from "./Misc";

describe("Misc Tests", () => {
	describe("alphabetScore tests", () => {
		test("Returns correct value for A", () => {
			expect(Misc.alphabetScore("A")).toBe(1);
			expect(Misc.alphabetScore("a")).toBe(1);
		});
		test("Returns correct value for Z", () => {
			expect(Misc.alphabetScore("Z")).toBe(26);
			expect(Misc.alphabetScore("z")).toBe(26);
		});
		test("Throws error for invalid character", () => {
			expect(() => Misc.alphabetScore("$")).toThrow(RangeError);
			expect(() => Misc.alphabetScore("1")).toThrow(RangeError);
		});
		test("Throws error for invalid length", () => {
			expect(() => Misc.alphabetScore("AA")).toThrow(RangeError);
		});
	});
});
