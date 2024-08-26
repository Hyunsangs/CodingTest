function solution(nums) {
    const pocketmonCount = {};  // 해시 테이블 (포켓몬 종류별 개수를 저장)

    // 포켓몬 종류별로 개수를 세는 과정
    for (let num of nums) {
        if (pocketmonCount[num]) {
            pocketmonCount[num]++;
        } else {
            pocketmonCount[num] = 1;
        }
    }

    const types = Object.keys(pocketmonCount).length;  // 고유한 포켓몬 종류 수 계산
    const maxSelect = nums.length / 2;             // 선택할 수 있는 최대 포켓몬 수

    // 최대 선택 가능한 포켓몬 종류 수를 반환
    return Math.min(types, maxSelect);
}
