function solution(n)
{
    let useBattery = 0;
    
    while( n !== 0) {
        if ( n % 2 === 1) {
            useBattery++
            n -= 1
        } else n /= 2;
    }
    
    return useBattery
   
}