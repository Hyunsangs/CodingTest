const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let INPUT_LENGTH = Number(input.shift());
let newArr = [];

for (let i = 0; i < INPUT_LENGTH; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  newArr.push([x, y]);
}

let sortArr = newArr.sort((a, b) => {
  return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
});

sortArr.forEach((coord) => console.log(coord.join(" ")));
