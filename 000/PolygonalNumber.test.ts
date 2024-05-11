import { test, expect, describe } from "bun:test";
import PolygonalNumber from "./PolygonalNumber";

describe("Polygonal Numbers Tests", () => {
	describe("isPentagonal Test", () => {
		test("Returns true if input is pentalgonal", () => {
			expect(PolygonalNumber.isPentagonal(35)).toBeTrue();
		});
		test("Returns false if input is not pentalgonal", () => {
			expect(PolygonalNumber.isPentagonal(50)).toBeFalse();
		});
	});

	describe("isHexagonal Test", () => {
		test("Returns true if input is hexagonal", () => {
			expect(PolygonalNumber.isHexagonal(45)).toBeTrue();
		});
		test("Returns false if input is not hexagonal", () => {
			expect(PolygonalNumber.isHexagonal(93)).toBeFalse();
		});
	});
});
