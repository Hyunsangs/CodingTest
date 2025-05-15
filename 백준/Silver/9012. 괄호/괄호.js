const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());

for (let i = 0; i < N; i++) {
  const arr = input[i].split("");
  let stack = [];
  let isVPS = true;

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === "(") {
      stack.push("(");
    } else {
      if (stack.length === 0) {
        isVPS = false;
        break;
      } else {
        stack.pop(); 
      }
    }
    
  }

  if (stack.length !== 0) isVPS = false;

  console.log(isVPS ? "YES" : "NO");
}