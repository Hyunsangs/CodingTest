const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().toUpperCase();

const count = {};

for (let char of input) {
  count[char] = (count[char] || 0) + 1;
}

let max = 0;
let answer = "";

for (let key in count) {
  if (count[key] > max) {
    max = count[key];
    answer = key;
  } else if (count[key] === max) {
    answer = "?";
  }
}

console.log(answer);
