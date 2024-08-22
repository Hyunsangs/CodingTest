function solution(A,B){
    
    const aSort = A.sort((a,b) => a - b );
    const bSort = B.sort((a,b) => b - a);
    let sum = 0;
    for (let i = 0 ; i < A.length ; i++) {
        sum += aSort[i] * bSort[i];
    }
    
    return sum;
}