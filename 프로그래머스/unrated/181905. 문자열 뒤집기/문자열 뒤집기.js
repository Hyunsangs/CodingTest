function solution(my_string, s, e) {

    const prefix = my_string.slice(0, s);        // 시작 인덱스 s 이전의 부분
    const reversed = my_string.slice(s, e + 1).split('').reverse().join(''); // s부터 e까지 뒤집은 부분
    const suffix = my_string.slice(e + 1);       // e 이후의 부분
    return prefix + reversed + suffix;
}
    
    
    
