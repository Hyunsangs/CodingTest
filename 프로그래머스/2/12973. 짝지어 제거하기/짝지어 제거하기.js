function solution(s) {
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
            stack.pop();  // 스택의 마지막 문자와 현재 문자가 같으면 제거
        } else {
            stack.push(s[i]);  // 아니면 스택에 현재 문자 추가
        }
    }
    
    return stack.length === 0 ? 1 : 0;
}
