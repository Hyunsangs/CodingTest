function solution(numbers, n) {
    let sum = 0;
    for ( let i = 0 ; i < numbers.length ; i++) {
        if( sum <= n ) {
            sum += numbers[i]
            console.log(sum)
        }
        
    }
    return sum
}