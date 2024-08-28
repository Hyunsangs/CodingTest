function solution(participant, completion) {

    const participantMap = new Map();
    
    // 모든 참가자를 해시맵에 저장
    participant.forEach( person => {
        if (participantMap.has(person) ) {
            participantMap.set(person, participantMap.get(person) + 1)
        } else {
            participantMap.set(person, 1);
        }
    });
    
    // 완주한 사람 해시맵에서 제거
    completion.forEach(person => {
        if(participantMap.has(person)) {
            participantMap.set(person, participantMap.get(person) - 1 )
        } 
    });
    
    // 남은 참가자 중 완주하지 못한 사람 찾기
    for ( let [key, value] of participantMap ) {
        if (value > 0) {
            return key
        }
    }
    
}