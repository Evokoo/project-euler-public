export default class PolygonalNumber {
	static triangle = (n: number): number => {
		return (n * (n + 1)) / 2;
	};

	static square = (n: number): number => {
		return n * n;
	};

	static pentagonal = (n: number): number => {
		return (n * (3 * n - 1)) / 2;
	};

	static hexagonal = (n: number): number => {
		return n * (2 * n - 1);
	};

	static heptagonal = (n: number): number => {
		return (n * (5 * n - 3)) / 2;
	};

	static octagonal = (n: number): number => {
		return n * (3 * n - 2);
	};
}
