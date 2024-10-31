function solution(clothes) {
    let answer = 1; // 곱셈을 위해 초기값을 1로 설정
    let typeCount = {}; // 각 의상 종류별 개수를 저장할 객체

    // 각 의상 종류별 개수 세기
    clothes.map((cloth) => {
        typeCount[cloth[1]] = (typeCount[cloth[1]] || 0) + 1;
    });
    

    // 각 의상 종류에서 "입지 않는 경우"를 포함한 선택지를 계산
    Object.values(typeCount).forEach((count) => {
        answer *= (count + 1); 
    });

    return answer - 1; // 아무것도 입지 않는 경우 제외
}
