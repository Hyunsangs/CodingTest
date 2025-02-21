const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let croatianAlphabets = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

let word = input;

for (let i = 0; i < croatianAlphabets.length; i++) {
  while (word.includes(croatianAlphabets[i])) {
    word = word.replace(croatianAlphabets[i], "*");
  }
}
console.log(word.length);
