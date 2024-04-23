import factorsOfN from "./factorsOfN";
import isPrime from "./isPrime";

export default function totientOfN(n: number) {
	if (isPrime(n)) {
		return n - 1;
	} else {
		const factors: number[] = factorsOfN(n);
		const primeFactors: number[] = factors.filter((factor) => isPrime(factor));

		let product = n;

		for (let i = 0; i < primeFactors.length; i++) {
			const p = primeFactors[i];
			product *= 1 - 1 / p;
		}

		return Math.floor(product);
	}
}
