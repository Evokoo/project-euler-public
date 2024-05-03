import { Point } from "./types";

/**
 * Utility class for calculating distance.
 * This class provides methods for computing distances between points
 * in different dimensional spaces using different distance formulas.
 */

export default class Distance {
	/**
	 * Calculates the Euclidean distance between two points in 3D space.
	 * @param {Point} a - The first point.
	 * @param {Point} b - The second point.
	 * @returns {number} The Euclidean distance between the points.
	 */

	static euclidean(a: Point, b: Point): number {
		a.z = a.z ?? 0;
		b.z = b.z ?? 0;

		return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2);
	}

	/**
	 * Calculates the Manhattan distance between two points
	 * where movement is restricted to vertical and horiztonal
	 * @param {Point} a - The first point.
	 * @param {Point} b - The second point.
	 * @returns {number} The Manhattan distance between the points.
	 */

	static manhattan(a: Point, b: Point): number {
		a.z = a.z ?? 0;
		b.z = b.z ?? 0;

		return Math.abs(b.x - a.x) + Math.abs(b.y - a.y) + Math.abs(b.z - a.z);
	}

	/**
	 * Calculates the Chebyshev distance between two points
	 * where vertical, horiztonal and diagonal movment is allowed.
	 * @param {Point} a - The first point.
	 * @param {Point} b - The second point.
	 * @returns {number} The Chebyshev distance between the points.
	 */

	static chebyshev(a: Point, b: Point): number {
		a.z = a.z ?? 0;
		b.z = b.z ?? 0;

		return Math.max(
			Math.abs(a.x - b.x),
			Math.abs(a.y - b.y),
			Math.abs(a.z - b.z)
		);
	}
}
