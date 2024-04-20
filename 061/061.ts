// Cyclical Figurate Numbers - Problem 061
// https://projecteuler.net/problem=61

/* See link for description */

import PolyNum from "./PolygonalNumber";

type PolygonalNumberMap = Map<number, { start: string; end: string }>;
type Chain = {
	chain: number[];
	head: string;
	tail: string;
	numberSet: number;
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
function findChain() {
	const polygonalNumbers = getPolygonalNumberMaps();
	const queue: Chain[] = [
		{ chain: [], head: "", tail: "", numberSet: 0, sum: 0 },
	];

	while (queue.length) {
		const current = queue.shift()!;

		if (current.numberSet === 6) {
			console.log(current);
			throw Error("Found?");
		}

		for (let [num, { start, end }] of polygonalNumbers[current.numberSet]) {
			if (current.numberSet === 0) {
				queue.push({
					chain: [num],
					head: start,
					tail: end,
					numberSet: current.numberSet + 1,
					sum: current.sum + num,
				});
			} else if (current.numberSet === 5) {
				if (start === current.tail && end === current.head) {
					queue.push({
						chain: [...current.chain, num],
						head: current.head,
						tail: end,
						numberSet: current.numberSet + 1,
						sum: current.sum + num,
					});
				}
			} else {
				if (start === current.tail) {
					queue.push({
						chain: [...current.chain, num],
						head: current.head,
						tail: end,
						numberSet: current.numberSet + 1,
						sum: current.sum + num,
					});
				}
			}
		}
	}

	console.log(chains);
	throw Error("Chain not found");
}

// findChain();

const pnums = getPolygonalNumberMaps();

const head = [];

for (let index of [0, 1]) {
	for (let [num, { start, end }] of pnums[index]) {
		if (index === 0) {
			head.push({ num, start, end });
		} else {
			for (let n of head) {
				if (end === n.start) {
					console.log(n.num, num);
				}
			}
		}
	}
}
