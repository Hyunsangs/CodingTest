const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = input.shift();
let arr = [];
let result = [];

for (let i = 0; i < input.length; i += 2) {
  arr.push([input[i], input[i + 1]]);
}

for (let i = 0; i < arr.length; i++) {
  const [k, n] = arr[i];

  let apt = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

  for (let j = 1; j <= n; j++) {
    apt[0][j] = j;
  }

  for (let floor = 1; floor <= k; floor++) {
    for (let room = 1; room <= n; room++) {
      apt[floor][room] = apt[floor][room - 1] + apt[floor - 1][room];
    }
  }

  result.push(apt[k][n]);
}

console.log(result.join("\n"));
