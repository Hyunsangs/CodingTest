const fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString());

let arr = [];

while (input > 1) {
  for (let i = 2; i <= input; i++) {
    if (input % i === 0) {
      arr.push(i);
      input /= i;
      break;
    }
  }
}

arr.sort((a, b) => a - b);

arr.forEach((e) => {
  console.log(e);
});
