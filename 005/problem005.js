//Problem 005
// https://projecteuler.net/problem=5

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const isMultiple = (n, x = 20) => {
	for (let i = x; i >= 2; i--) {
		if (n % i !== 0) return false;
	}
	return true;
};

let n = 20;

while (!isMultiple(n)) {
	n += 20;
}

console.log(n);
