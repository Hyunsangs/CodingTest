function solution(board, moves) {
    let stack = [];
    let cnt = 0;

    moves.forEach(move => {
        // 각 move에서 해당 열을 탐색
        for (let i = 0; i < board.length; i++) {
            let currentDoll = board[i][move - 1]; // move는 1-based index

            // 인형이 있는지 확인 (0이 아닌 경우)
            if (currentDoll !== 0) {
                // 스택의 마지막 인형과 현재 인형을 비교
                if (stack.length > 0 && stack[stack.length - 1] === currentDoll)                {
                    stack.pop(); // 연속된 인형 제거
                    cnt += 2;    // 사라진 인형 2개 카운트
                } else {
                    stack.push(currentDoll); // 인형을 스택에 추가
                }

                // 뽑은 인형은 0으로 표시해 다시 뽑히지 않도록 함
                board[i][move - 1] = 0;
                break; // 해당 열에서 인형을 뽑았으므로 루프 중단
            }
        }
    });

    return cnt;
}
