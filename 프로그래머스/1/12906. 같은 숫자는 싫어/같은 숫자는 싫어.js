function solution(arr)
{
    let answer = [];
    arr.forEach((num, idx) => {
        if (idx === 0 || answer[answer.length-1] !== num) {
            answer.push(num);
        }
    })
    return answer;
}