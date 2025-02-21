const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let INPUT_LENGTH = input.shift();
let setArray = new Set([...input]);
let inputArray = [...setArray];

let sortArray = inputArray.sort((a, b) => {
  return a.length === b.length ? a.localeCompare(b) : a.length - b.length;
});

for (let answer of sortArray) {
  console.log(answer);
}
