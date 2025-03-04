const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input.shift();
function gcd(a, b) {
  if (b == 0) return a;
  else return gcd(b, a % b);
}

for (let i = 0; i < input.length; i++) {
  let arr = input[i]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

  const [a, b] = arr;

  console.log((a * b) / gcd(a, b));
}
