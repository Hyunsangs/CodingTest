const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

const [num1, num2] = input;

let getGCD = (num1, num2) => {
  let gcd = 1;

  for (let i = 2; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }

  return gcd;
};

let getLCM = (num1, num2) => {
  let lcm = 1;

  while (true) {
    if (lcm % num1 == 0 && lcm % num2 == 0) {
      break;
    }
    lcm++;
  }
  return lcm;
};

console.log(getGCD(num1, num2));
console.log(getLCM(num1, num2));
