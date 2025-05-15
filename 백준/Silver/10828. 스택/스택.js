const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input.shift());
let stack = [];
const result = [];

for (let i = 0; i < num; i++) {
  const command = input[i].split(" ");

  switch (command[0]) {
    case "push":
      stack.push(Number(command[1]));
      break;

    case "pop":
      result.push(stack.length === 0 ? -1 : stack.pop());
      break;

    case "size":
      result.push(stack.length);
      break;

    case "empty":
      result.push(stack.length === 0 ? 1 : 0);
      break;

    case "top":
      result.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
      break;
  }
}

console.log(result.join("\n"));
