function solution(s) {
    const length = s.length;
    const middle = Math.floor(length / 2);
    
   
    if (length % 2 === 1) {
        return s[middle];
    }
   
    else {
        return s.slice(middle - 1, middle + 1);
    }
}
