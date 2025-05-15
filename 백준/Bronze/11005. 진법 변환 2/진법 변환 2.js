const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const a = Number(input[0]);
const b = Number(input[1]);

let c = a.toString(b).toUpperCase();

console.log(c);
