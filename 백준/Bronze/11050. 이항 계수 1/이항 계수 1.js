const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [a, b] = input;

let num1 = 1;
let num2 = 1;
for (let i = a; i > a - b; i--) {
  num1 *= i;
}

for (let i = 1; i <= b; i++) {
  num2 *= i;
}

console.log(num1 / num2);
