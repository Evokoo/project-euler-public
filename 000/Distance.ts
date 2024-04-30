type Point = { x: number; y: number; z?: number };

export default class Distance {
	// Straight line distance between two points
	static euclidean(a: Point, b: Point): number {
		a.z = a.z ?? 0;
		b.z = b.z ?? 0;

		return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2);
	}

	// Distance between two points on a grid where diagonal movement is not allowed
	static manhattan(a: Point, b: Point): number {
		a.z = a.z ?? 0;
		b.z = b.z ?? 0;

		return Math.abs(b.x - a.x) + Math.abs(b.y - a.y) + Math.abs(b.z - a.z);
	}

	// Distance between two points on a grid where diagonal movement is allowed
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
