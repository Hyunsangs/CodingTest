function solution(s) {
    const answerArr = s.split(' ').sort((a,b) => b - a)
    const maxNum =  answerArr[0]
    const minNum =  answerArr[answerArr.length-1]
    
    return `${minNum} ${maxNum}`
}