function solution(numbers) {
    return numbers.map((x) => {
        if (x % 2 === 0) {
            // 짝수일 경우
            return x + 1;
        } else {
            // 홀수일 경우
           let bit = "0" + x.toString(2);
        let idx = bit.lastIndexOf("0");
        return parseInt(`${bit.slice(0, idx)}10${bit.slice(idx + 2)}` , 2)
        }
    });
}