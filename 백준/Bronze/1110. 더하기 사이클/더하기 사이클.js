const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let num = Number(input);
let origin = num;
let count = 0;

do {
  const left = Math.floor(num / 10);
  const right = num % 10;
  const sum = left + right;
  num = right * 10 + (sum % 10);
  count++;
} while (num !== origin);

console.log(count);
