function solution(lottos, win_nums) {
    let ranks = [ 6,6,5,4,3,2,1 ] // 맞춘 개수에 따른 등수 (0개 맞추면 6등)
    let correctNum = 0;
    let zeroCount = 0;
    
    lottos.forEach(num => {
        if(win_nums.includes(num)) {
            correctNum++;
        }
        if ( num === 0) {
            zeroCount++
        }
    })
    
    let maxCorrect = correctNum + zeroCount;
    let minCorrect = correctNum 
    
  
    
    
    
    return [ ranks[maxCorrect], ranks[minCorrect] ]
    
}