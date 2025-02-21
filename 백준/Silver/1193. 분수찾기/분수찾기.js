const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let line = 0; // 현재 몇 번째 대각선인지
let sum = 0; // 현재까지 포함된 분수 개수

// 몇 번째 대각선에 X가 속하는지 찾기
while (sum < input) {
  line++;
  sum += line;
}

// X가 해당 대각선에서 몇 번째인지 계산
let indexInLine = input - (sum - line);

let numerator, denominator;

// 홀수 번째 라인일 때 (아래 → 위)
if (line % 2 === 1) {
  numerator = line + 1 - indexInLine;
  denominator = indexInLine;
}
// 짝수 번째 라인일 때 (위 → 아래)
else {
  numerator = indexInLine;
  denominator = line + 1 - indexInLine;
}

console.log(`${numerator}/${denominator}`);
