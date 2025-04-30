const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const divisors = input[1].split(" ").map(Number);

if (divisors.length === 1) {
  console.log(divisors[0] * divisors[0]);
} else {
  const min = Math.min(...divisors);
  const max = Math.max(...divisors);
  console.log(min * max);
}