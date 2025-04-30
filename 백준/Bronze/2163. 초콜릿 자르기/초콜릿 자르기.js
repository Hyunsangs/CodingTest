const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const [num1, num2] = input.map(Number);
const amount = num1 * num2;

console.log(amount - 1);
