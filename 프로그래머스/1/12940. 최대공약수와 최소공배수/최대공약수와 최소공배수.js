function solution(n, m) {
    let num1 = gcd(n,m)
    let num2 = func1(n,m)
    
    return [num1,num2]
}

function func1(a,b) {
    if ( a < b ) {
        [a,b] = [b,a]
    }
    return (a*b) / gcd(a,b)
}

function gcd(a,b) {
    if ( a < b ) {
       [a, b] = [ b, a ]
    }
    if ( b === 0) return a;
    
    return gcd(b, a % b)
}