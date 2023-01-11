// Problem 018
// https://projecteuler.net/problem=18
// By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.
//      3
//     7 4
//    2 4 6
//   8 5 9 3
// That is, 3 + 7 + 4 + 9 = 23.
// Find the maximum total from top to bottom of the input triangle
import fs from "fs";
function getData(file) {
    const data = fs
        .readFileSync(file + ".txt", "utf-8")
        .split("\n")
        .map((row) => row.trim().split(" "));
    return data;
}
const pyramid = getData("input"), startIndex = pyramid[0].findIndex((n) => n !== " "), startValue = +pyramid[0][startIndex];
let queue = [{ level: 1, sum: startValue, index: startIndex }], pathValues = [];
while (queue.length) {
    let { sum, index, level } = queue.pop();
    if (level === pyramid.length) {
        pathValues.push(sum);
        continue;
    }
    //Get Adjacent Values
    let leftIndex = index, rightIndex = index + 1, leftValue = +pyramid[level][leftIndex], rightValue = +pyramid[level][rightIndex];
    //Add points to queue
    queue.push({
        level: level + 1,
        sum: sum + leftValue,
        index: leftIndex,
    });
    queue.push({
        level: level + 1,
        sum: sum + rightValue,
        index: rightIndex,
    });
}
let maxValue = Math.max(...pathValues);
console.log({ maxValue });
