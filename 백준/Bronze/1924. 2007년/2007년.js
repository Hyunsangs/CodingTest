const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [num1, num2] = input.map(Number);
let num3 = day(num1, num2);

function day(month, day) {
  if (month === 1) {
    return day;
  } else if (month === 2) {
    return 31 + day;
  } else if (month === 3) {
    return 59 + day;
  } else if (month === 4) {
    return 90 + day;
  } else if (month === 5) {
    return 120 + day;
  } else if (month === 6) {
    return 151 + day;
  } else if (month === 7) {
    return 181 + day;
  } else if (month === 8) {
    return 212 + day;
  } else if (month === 9) {
    return 243 + day;
  } else if (month === 10) {
    return 273 + day;
  } else if (month === 11) {
    return 304 + day;
  } else if (month === 12) {
    return 334 + day;
  }
}

switch (num3 % 7) {
  case 0:
    console.log("SUN");
    break;
  case 1:
    console.log("MON");
    break;
  case 2:
    console.log("TUE");
    break;
  case 3:
    console.log("WED");
    break;
  case 4:
    console.log("THU");
    break;
  case 5:
    console.log("FRI");
    break;
  case 6:
    console.log("SAT");
    break;
}
