//Problem 003
// https://projecteuler.net/problem=3
//The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143?

const isPrime = (n) => {
	let max = Math.ceil(Math.sqrt(n));

	for (let i = 2; i < max; i++) {
		if (n % i === 0) return false;
	}

	return n > 1;
};

const primeFactors = (n) => {
	let factors = [],
		max = Math.ceil(Math.sqrt(n));

	for (let i = 2; i < max; i++) {
		if (n % i === 0 && isPrime(i)) {
			factors.push(i);
		}
	}

	return factors;
};

console.time("Find largest prime factor");
console.log(primeFactors(600851475143));
console.timeEnd("Find largest prime factor");
