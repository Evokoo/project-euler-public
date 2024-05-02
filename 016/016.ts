// Power Digit Sum - Problem 016
// https://projecteuler.net/problem=16

/*
	2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
	What is the sum of the digits of the number 2^1000?
*/

function nthPowerSum(base: number, exponent: number): number {
	const nthPower: BigInt = BigInt(Math.pow(base, exponent));
	const sum: number = [...String(nthPower)].reduce(
		(acc, cur) => acc + Number(cur),
		0
	);

	return sum;
}

console.log(nthPowerSum(2, 1000));
