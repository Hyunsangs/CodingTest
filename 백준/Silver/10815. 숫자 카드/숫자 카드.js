const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr1 = new Set(input[1].split(" ").map(Number));
const arr2 = input[3].split(" ").map(Number);

let answer = "";
for (let i = 0; i < arr2.length; i++) {
  if (arr1.has(arr2[i])) {
    answer += "1 ";
  } else {
    answer += "0 ";
  }
}
console.log(answer.trim());