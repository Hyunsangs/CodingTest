const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const a = Number(input).toString(2).split("");

let length = a.filter((v) => v === "1").length;

console.log(length);
