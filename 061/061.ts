// Cyclical Figurate Numbers - Problem 061
// https://projecteuler.net/problem=61

/* See link for description */

import PolyNum from "./PolygonalNumber";

type PolygonalNumberMap = Map<number, { start: string; end: string }>;
type Chain = {
	chain: number[];
	head: string;
	tail: string;
	usedSets: Set<number>;
	sum: number;
};

function generatePolygonalNumberMap(
	min: number,
	max: number,
	polyNumFn: Function
): PolygonalNumberMap {
	const numbers: PolygonalNumberMap = new Map();

	let base = 1;

	while (polyNumFn(base) < max) {
		const num = polyNumFn(base);
		const digits = String(num);

		if (num < min) {
			base++;
			continue;
		} else {
			numbers.set(num, { start: digits.slice(0, 2), end: digits.slice(2) });
			base++;
		}
	}

	return numbers;
}
function getPolygonalNumberMaps(): PolygonalNumberMap[] {
	return [
		PolyNum.triangle,
		PolyNum.square,
		PolyNum.pentagonal,
		PolyNum.hexagonal,
		PolyNum.heptagonal,
		PolyNum.octagonal,
	].map((fn) => generatePolygonalNumberMap(1000, 10_000, fn));
}
export default function findChainSum() {
	const polygonalNumbers = getPolygonalNumberMaps();
	const queue: Chain[] = [
		{ chain: [], head: "", tail: "", usedSets: new Set(), sum: 0 },
	];

	while (queue.length) {
		const current = queue.pop()!;

		if (current.chain.length === 6) {
			return current.sum;
		}

		for (let i = 0; i < polygonalNumbers.length; i++) {
			if (current.usedSets.has(i)) {
				continue;
			}

			for (let [num, { start, end }] of polygonalNumbers[i]) {
				if (current.usedSets.size === 0) {
					queue.push({
						chain: [num],
						head: start,
						tail: end,
						usedSets: new Set([...current.usedSets, i]),
						sum: current.sum + num,
					});
				} else if (current.usedSets.size === 5) {
					if (start === current.tail && end === current.head) {
						queue.push({
							chain: [...current.chain, num],
							head: current.head,
							tail: end,
							usedSets: new Set([...current.usedSets, i]),
							sum: current.sum + num,
						});
					}
				} else {
					if (start === current.tail) {
						queue.push({
							chain: [...current.chain, num],
							head: current.head,
							tail: end,
							usedSets: new Set([...current.usedSets, i]),
							sum: current.sum + num,
						});
					}
				}
			}
		}
	}

	throw Error("Chain not found");
}
