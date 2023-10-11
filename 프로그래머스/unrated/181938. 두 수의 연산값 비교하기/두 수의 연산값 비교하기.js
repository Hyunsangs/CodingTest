function solution(a, b) {
    let numStr = String(a) + String(b)
    let numRes = 2 * a * b;
    
    let strNum = Number(numStr);
    
    if( strNum > numRes) {
        return strNum
    } else {
        return numRes
    }
}