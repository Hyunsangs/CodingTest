const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());

for (let i = 0; i < N; i++) {
  const scoreArr = input[i].split(" ");
  let sum = 0;
  const people = Number(scoreArr.shift());

  for (let j = 0; j < people; j++) {
    sum += Number(scoreArr[j]);
  }

  const average = sum / people;

  const part = scoreArr.filter((score) => Number(score) > average).length;

  let answer = calculatePercentage(part, people);
  console.log(answer + "%");
}

function calculatePercentage(part, whole) {
  return ((part / whole) * 100).toFixed(3);
}
