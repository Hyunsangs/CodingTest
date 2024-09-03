function solution(x, n) {
   let answer = [];
    let add = x;
    for ( let i = 0 ; i < n ; i++ ){
        answer.push(x);
        x += add
        console.log(x)
    }
    
    return answer
}