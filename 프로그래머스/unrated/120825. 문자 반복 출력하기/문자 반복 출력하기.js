function solution(my_string, n) {
    
    let answer = [...my_string].map(a => a.repeat(n)).join('');
    return answer
    
}