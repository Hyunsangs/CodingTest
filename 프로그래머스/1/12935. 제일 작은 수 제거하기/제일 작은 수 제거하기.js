function solution(arr) {
    
    // 배열에서 가장 작은 값 찾기
    const minValue = Math.min(...arr);
    
    // 가장 작은 값을 제외한 새로운 배열 생성
    const result = arr.filter(value => value !== minValue);
    
    // 배열이 비어 있으면 [-1] 반환, 그렇지 않으면 결과 배열 반환
    return result.length === 0 ? [-1] : result;

}