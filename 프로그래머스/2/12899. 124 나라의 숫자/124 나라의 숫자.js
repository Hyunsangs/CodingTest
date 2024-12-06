function solution(n) {
    let result = ''; // 결과 문자열

    while (n > 0) {
        // 3으로 나눈 나머지 계산 (1, 2, 4에 매핑)
        let remainder = n % 3;

        // 나머지가 0인 경우
        if (remainder === 0) {
            result = '4' + result; // 나머지 0은 '4'로 표현
            n = Math.floor(n / 3) - 1; // 자리수 내림
        } else {
            result = remainder + result; // 나머지가 1 또는 2인 경우 그대로 추가
            n = Math.floor(n / 3); // 몫만 사용
        }
    }

    return result; // 결과 반환
}