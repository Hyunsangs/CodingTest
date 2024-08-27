function solution(n) {
    const nLength = n.toString(2).split('').filter(e => e === '1').length;
    
    let answer = n
    while (true) {
        answer++
        let answerOneAmount = answer.toString(2).split('').filter(e => e === '1').length;
        
        if(  nLength === answerOneAmount) {
            return answer
        } 
    }
    
}