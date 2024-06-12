import { test, expect, describe } from "bun:test";
import Arithmetic from "./Arithmetic";

describe("Arithmetic Tests", () => {
	describe("isPandigital Tests", () => {
		test("Returns true for pandigital number, exluding zero", () => {
			expect(Arithmetic.isPandigital(123456789)).toBe(true);
		});
		test("Returns true for pandigital number, including zero", () => {
			expect(Arithmetic.isPandigital(1234567890, true)).toBe(true);
		});
		test("Returns false for non-pandigital number", () => {
			expect(Arithmetic.isPandigital(12344)).toBe(false);
		});
		test("Returns false for pandigital number", () => {
			expect(Arithmetic.isPandigital(102344, true)).toBe(false);
		});
		test("Error thrown if length exceeds maximum, exclude zero", () => {
			expect(() => Arithmetic.isPandigital(1234567890)).toThrow(RangeError);
		});
		test("Error thrown if length exceeds maximum, exclude zero", () => {
			expect(() => Arithmetic.isPandigital(12345678901, true)).toThrow(
				RangeError
			);
		});
	});
	describe("Digit Sum Tests", () => {
		test("Valid string", () => {
			expect(Arithmetic.digitSum("123")).toBe(6);
		});
		test("Valid number", () => {
			expect(Arithmetic.digitSum(443)).toBe(11);
		});
		test("Invalid input", () => {
			expect(() => Arithmetic.digitSum(43.2)).toThrowError(
				"Input must be a valid integer"
			);
			expect(() => Arithmetic.digitSum("12A")).toThrowError(
				"Input must be a valid integer"
			);
		});
	});
});
