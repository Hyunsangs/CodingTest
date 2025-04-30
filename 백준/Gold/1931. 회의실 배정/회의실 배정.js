const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
let arr = [];

for (let i = 1; i <= N; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  arr.push([start, end]);
}


arr.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let count = 0;
let endTime = 0;

for (let i = 0; i < N; i++) {
  if (arr[i][0] >= endTime) {
    count++;
    endTime = arr[i][1];
  }
}

console.log(count);
