const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());

input.sort((a, b) => a - b);
for (let i = 0; i < N; i++) {
  console.log(input[i]);
}
