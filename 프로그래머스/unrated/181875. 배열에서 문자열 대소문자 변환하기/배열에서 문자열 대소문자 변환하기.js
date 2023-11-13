function solution(strArr) {
    for (let i = 0; i < strArr.length; i++) {
        if (i % 2 === 0) {
            strArr[i] = strArr[i].toLowerCase(); // 대문자를 소문자로 변경
        } else {
            strArr[i] = strArr[i].toUpperCase(); // 소문자를 대문자로 변경
        }
    }
    return strArr;
}