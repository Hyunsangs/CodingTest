const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let arr = [];
  let sum = 0;
  let answer = "";
  let a = Number(input[i]);

  let length = Math.floor(a / 2);
  for (let j = 1; j <= length; j++) {
    if (a % j === 0) {
      arr.push(j);
      sum += j;
    }
  }

  if (a === sum) {
    answer += `${sum} = `;
    for (let k = 0; k < arr.length; k++) {
      if (k === arr.length - 1) {
        answer += `${arr[k]}`;
      } else {
        answer += `${arr[k]} + `;
      }
    }
    console.log(answer);
  } else {
    console.log(`${a} is NOT perfect.`);
  }
}
