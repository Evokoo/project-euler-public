// Self powers - Problem 048
// https://projecteuler.net/problem=48

/*
	The series, 11 + 22 + 33 + ... + 1010 = 10405071317.

	Find the last ten digits of the series, 11 + 22 + 33 + ... + 10001000.
*/

function selfPowerSum(limit: bigint): string {
	let sum: bigint = 0n;

	for (let i = 1n; i <= limit; i++) {
		sum += BigInt(i) ** BigInt(i);
	}

	return String(sum).slice(-10);
}

console.log(selfPowerSum(1000n));
