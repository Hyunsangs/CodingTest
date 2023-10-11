function solution(a, b) {
    let numStr1 = String(a) + String(b);
    let numStr2 = String(b) + String(a);
    
    let StrRes = Number(numStr1);
    let StrRes2 = Number(numStr2);
    
    if( numStr1 > numStr2) {
        return StrRes;
    } else {
        return StrRes2;
    }
    
}