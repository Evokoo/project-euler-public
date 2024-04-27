// Counting Summations - Problem 076
// https://projecteuler.net/problem=76

/*
It is possible to write five as a sum in exactly six different ways:

4 + 1
3 + 2
4 + 1 + 1
2 + 2 + 1
2 + 1 + 1 + 1
1 + 1 + 1 + 1 + 1

How many different ways can one hundred be written as a sum of at least two positive integers?
*/

import partitions from "../000/partitionFunction";

const n = 100;
const sumCount = partitions(n);

//Remove one from the total count as single integers are not sums.
console.log(sumCount[n] - 1);
